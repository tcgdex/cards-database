import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリボン",
		'zh-tw': "蝶結萌虻",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "雨に 濡れることが 大嫌い。 曇りがちな ガラル地方では 姿を めったに 拝めない。",
		'zh-tw': "最討厭雨水弄濕自己。因為伽勒爾地區陰天居多，所以很難見得到牠的身影。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "トリックステップ",
				'zh-tw': "戲法舞步",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
				'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560803,
				tcgplayer: 569263,
			},
		},
	],

	evolveFrom: {
		ja: "アブリー",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Common",
	dexId: [743],
};

export default card;
