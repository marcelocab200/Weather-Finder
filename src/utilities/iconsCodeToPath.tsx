import { ImageSourcePropType } from "react-native";

interface IconPaths {
  [code: string]: ImageSourcePropType;
}

interface IconsByTime {
  [time: string]: IconPaths;
}

const iconsCodeToPath: IconsByTime = {
  day: {
    1000: require("../../assets/weatherIcons/day/113.png"),
    1003: require("../../assets/weatherIcons/day/116.png"),
    1006: require("../../assets/weatherIcons/day/119.png"),
    1009: require("../../assets/weatherIcons/day/122.png"),
    1030: require("../../assets/weatherIcons/day/143.png"),
    1063: require("../../assets/weatherIcons/day/176.png"),
    1066: require("../../assets/weatherIcons/day/179.png"),
    1069: require("../../assets/weatherIcons/day/182.png"),
    1072: require("../../assets/weatherIcons/day/185.png"),
    1087: require("../../assets/weatherIcons/day/200.png"),
    1114: require("../../assets/weatherIcons/day/227.png"),
    1117: require("../../assets/weatherIcons/day/230.png"),
    1135: require("../../assets/weatherIcons/day/248.png"),
    1147: require("../../assets/weatherIcons/day/260.png"),
    1150: require("../../assets/weatherIcons/day/263.png"),
    1153: require("../../assets/weatherIcons/day/266.png"),
    1168: require("../../assets/weatherIcons/day/281.png"),
    1171: require("../../assets/weatherIcons/day/284.png"),
    1180: require("../../assets/weatherIcons/day/293.png"),
    1183: require("../../assets/weatherIcons/day/296.png"),
    1186: require("../../assets/weatherIcons/day/299.png"),
    1189: require("../../assets/weatherIcons/day/302.png"),
    1192: require("../../assets/weatherIcons/day/305.png"),
    1195: require("../../assets/weatherIcons/day/308.png"),
    1198: require("../../assets/weatherIcons/day/311.png"),
    1201: require("../../assets/weatherIcons/day/314.png"),
    1204: require("../../assets/weatherIcons/day/317.png"),
    1207: require("../../assets/weatherIcons/day/320.png"),
    1210: require("../../assets/weatherIcons/day/323.png"),
    1213: require("../../assets/weatherIcons/day/326.png"),
    1216: require("../../assets/weatherIcons/day/329.png"),
    1219: require("../../assets/weatherIcons/day/332.png"),
    1222: require("../../assets/weatherIcons/day/335.png"),
    1225: require("../../assets/weatherIcons/day/338.png"),
    1237: require("../../assets/weatherIcons/day/350.png"),
    1240: require("../../assets/weatherIcons/day/353.png"),
    1243: require("../../assets/weatherIcons/day/356.png"),
    1246: require("../../assets/weatherIcons/day/359.png"),
    1249: require("../../assets/weatherIcons/day/362.png"),
    1252: require("../../assets/weatherIcons/day/365.png"),
    1255: require("../../assets/weatherIcons/day/368.png"),
    1258: require("../../assets/weatherIcons/day/371.png"),
    1261: require("../../assets/weatherIcons/day/374.png"),
    1264: require("../../assets/weatherIcons/day/377.png"),
    1273: require("../../assets/weatherIcons/day/386.png"),
    1276: require("../../assets/weatherIcons/day/389.png"),
    1279: require("../../assets/weatherIcons/day/392.png"),
    1282: require("../../assets/weatherIcons/day/395.png"),
  },

  night: {
    1000: require("../../assets/weatherIcons/night/113.png"),
    1003: require("../../assets/weatherIcons/night/116.png"),
    1006: require("../../assets/weatherIcons/night/119.png"),
    1009: require("../../assets/weatherIcons/night/122.png"),
    1030: require("../../assets/weatherIcons/night/143.png"),
    1063: require("../../assets/weatherIcons/night/176.png"),
    1066: require("../../assets/weatherIcons/night/179.png"),
    1069: require("../../assets/weatherIcons/night/182.png"),
    1072: require("../../assets/weatherIcons/night/185.png"),
    1087: require("../../assets/weatherIcons/night/200.png"),
    1114: require("../../assets/weatherIcons/night/227.png"),
    1117: require("../../assets/weatherIcons/night/230.png"),
    1135: require("../../assets/weatherIcons/night/248.png"),
    1147: require("../../assets/weatherIcons/night/260.png"),
    1150: require("../../assets/weatherIcons/night/263.png"),
    1153: require("../../assets/weatherIcons/night/266.png"),
    1168: require("../../assets/weatherIcons/night/281.png"),
    1171: require("../../assets/weatherIcons/night/284.png"),
    1180: require("../../assets/weatherIcons/night/293.png"),
    1183: require("../../assets/weatherIcons/night/296.png"),
    1186: require("../../assets/weatherIcons/night/299.png"),
    1189: require("../../assets/weatherIcons/night/302.png"),
    1192: require("../../assets/weatherIcons/night/305.png"),
    1195: require("../../assets/weatherIcons/night/308.png"),
    1198: require("../../assets/weatherIcons/night/311.png"),
    1201: require("../../assets/weatherIcons/night/314.png"),
    1204: require("../../assets/weatherIcons/night/317.png"),
    1207: require("../../assets/weatherIcons/night/320.png"),
    1210: require("../../assets/weatherIcons/night/323.png"),
    1213: require("../../assets/weatherIcons/night/326.png"),
    1216: require("../../assets/weatherIcons/night/329.png"),
    1219: require("../../assets/weatherIcons/night/332.png"),
    1222: require("../../assets/weatherIcons/night/335.png"),
    1225: require("../../assets/weatherIcons/night/338.png"),
    1237: require("../../assets/weatherIcons/night/350.png"),
    1240: require("../../assets/weatherIcons/night/353.png"),
    1243: require("../../assets/weatherIcons/night/356.png"),
    1246: require("../../assets/weatherIcons/night/359.png"),
    1249: require("../../assets/weatherIcons/night/362.png"),
    1252: require("../../assets/weatherIcons/night/365.png"),
    1255: require("../../assets/weatherIcons/night/368.png"),
    1258: require("../../assets/weatherIcons/night/371.png"),
    1261: require("../../assets/weatherIcons/night/374.png"),
    1264: require("../../assets/weatherIcons/night/377.png"),
    1273: require("../../assets/weatherIcons/night/386.png"),
    1276: require("../../assets/weatherIcons/night/389.png"),
    1279: require("../../assets/weatherIcons/night/392.png"),
    1282: require("../../assets/weatherIcons/night/395.png"),
  },
};

export default iconsCodeToPath;
