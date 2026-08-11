import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サボネア",
		'zh-tw': "刺球仙人掌",
		'th-th': "ซาโบเนีย",
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "砂漠などの 過酷な 環境を 好む。 体の 中に たくわえた 水で ３０日間 生きられる。",
		'zh-tw': "喜歡沙漠等嚴酷環境。能靠體內儲存的水分存活３０天。",
		'th-th': "ชอบอยู่ในสภาพแวดล้อมที่โหดร้าย เช่น ทะเลทราย น้ำที่สะสมในร่างกายสามารถหล่อเลี้ยงชีวิตให้อยู่ได้ 30 วัน",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "チクッ",
				'zh-tw': "刺痛",
				'th-th': "ต่อย",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "たたく",
				'zh-tw': "敲擊",
				'th-th': "ตี",
			},
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533227,
				tcgplayer: 568949,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [331],
};

export default card;
