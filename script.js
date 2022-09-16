const { Provinces, Districts, Subdistricts, Villages } = require("@regions-of-indonesia/data");

const jetpack = require("fs-jetpack");

function createCodeNames(object) {
  return Object.entries(object).map(([code, name]) => {
    return { code, name };
  });
}

function getCodeInfo(code) {
  const splitted = code.split(".");
  return { parent: splitted.slice(0, splitted.length - 1).join("."), self: splitted[splitted.length - 1] };
}

function codedotjson(code) {
  return `${code}.json`;
}

function stringify(json) {
  return JSON.stringify(json);
}

const folder = {
  province: (...args) => "province/" + args.join("/"),
  provinces: (...args) => "provinces/" + args.join("/"),
  district: (...args) => "district/" + args.join("/"),
  districts: (...args) => "districts/" + args.join("/"),
  districtsInProvince: (...args) => "province/" + args.join("/") + "/districts.json",
  subdistrict: (...args) => "subdistrict/" + args.join("/"),
  subdistricts: (...args) => "subdistricts/" + args.join("/"),
  subdistrictsInDistrict: (...args) => "district/" + args.join("/") + "/subdistricts.json",
  village: (...args) => "village/" + args.join("/"),
  villages: (...args) => "villages/" + args.join("/"),
  villagesInSubdistrict: (...args) => "subdistrict/" + args.join("/") + "/villages.json",
};

const write = {
  province: true,
  provinces: true,
  district: true,
  districts: true,
  subdistrict: true,
  subdistricts: true,
  village: true,
  villages: true,
};

const ProvincesCodeNames = createCodeNames(Provinces);
const DistrictsCodeNames = createCodeNames(Districts);
const SubdistrictsCodeNames = createCodeNames(Subdistricts);
const VillagesCodeNames = createCodeNames(Villages);

// CLEAN

Object.keys(folder).forEach((key) => {
  if (write[key]) jetpack.remove(key);
});

// PROVINCES

write.provinces && jetpack.write(folder.provinces("provinces.json"), stringify(ProvincesCodeNames));

console.time("provinces");
ProvincesCodeNames.forEach((province) => {
  write.province && jetpack.write(folder.province(codedotjson(province.code)), stringify(province));
});
console.timeEnd("provinces");

// DISTRICTS

console.time("districts");
let GroupDistrictsCodeNames = {};
DistrictsCodeNames.forEach((district) => {
  const { parent } = getCodeInfo(district.code);
  if (!GroupDistrictsCodeNames.hasOwnProperty(parent)) GroupDistrictsCodeNames[parent] = [];
  GroupDistrictsCodeNames[parent].push(district);

  write.district && jetpack.write(folder.district(codedotjson(district.code)), stringify(district));
});
Object.entries(GroupDistrictsCodeNames).forEach(([code, districts]) => {
  if (write.districts) {
    const stringified = stringify(districts);
    jetpack.write(folder.districts(codedotjson(code)), stringified);
    jetpack.write(folder.districtsInProvince(code), stringified);
  }
});
console.timeEnd("districts");

// SUBDISTRICTS

console.time("subdistricts");
let GroupSubdistrictsCodeNames = {};
SubdistrictsCodeNames.forEach((subdistrict) => {
  const { parent } = getCodeInfo(subdistrict.code);
  if (!GroupSubdistrictsCodeNames.hasOwnProperty(parent)) GroupSubdistrictsCodeNames[parent] = [];
  GroupSubdistrictsCodeNames[parent].push(subdistrict);

  write.subdistrict && jetpack.write(folder.subdistrict(codedotjson(subdistrict.code)), stringify(subdistrict));
});
Object.entries(GroupSubdistrictsCodeNames).forEach(([code, subdistricts]) => {
  if (write.subdistricts) {
    const stringified = stringify(subdistricts);
    jetpack.write(folder.subdistricts(codedotjson(code)), stringified);
    jetpack.write(folder.subdistrictsInDistrict(code), stringified);
  }
});
console.timeEnd("subdistricts");

// VILLAGES

console.time("villages");
let GroupVillagesCodeNames = {};
VillagesCodeNames.forEach((village) => {
  const { parent } = getCodeInfo(village.code);
  if (!GroupVillagesCodeNames.hasOwnProperty(parent)) GroupVillagesCodeNames[parent] = [];
  GroupVillagesCodeNames[parent].push(village);

  write.village && jetpack.write(folder.village(codedotjson(village.code)), stringify(village));
});
Object.entries(GroupVillagesCodeNames).forEach(([code, villages]) => {
  if (write.villages) {
    const stringified = stringify(villages);
    jetpack.write(folder.villages(codedotjson(code)), stringified);
    jetpack.write(folder.villagesInSubdistrict(code), stringified);
  }
});
console.timeEnd("villages");
