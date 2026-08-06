import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・コケコV",
		'zh-tw': "卡璞・鳴鳴V",
		th: "คาปู โคเคโคV",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エレキボール",
				'zh-tw': "電球",
				th: "อิเล็กทริกบอล",
			},
			damage: 40,
			cost: ["Lightning"],
		},
		{
			name: {
				ja: "スパイラルサンダー",
				'zh-tw': "螺旋雷電",
				th: "สไปรัลธันเดอร์",
			},
			damage: "20+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーの数×40ダメージ追加。",
				'zh-tw': "增加對手的場上寶可夢身上附加的能量的數量×40點傷害。",
				th: "การโจมตีนี้จะเพิ่มแดเมจอีกเท่ากับจำนวนพลังงานที่ติดอยู่ที่โปเกมอนบนกระดานฝ่ายตรงข้าม x40",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533307,
				tcgplayer: 568965,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [785],
};

export default card;
