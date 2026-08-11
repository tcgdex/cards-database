import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デンヂムシ",
		'zh-tw': "蟲電寶",
		'th-th': "เด็นจิมูชิ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'ja-jp': "頑丈な 殻で 身を 守る。 顎の 先端から 電気を 流して 反撃する。",
		'zh-tw': "用結實的外殼保護自己。會從顎部的尖端 放出電流反擊對手。",
		'th-th': "ปกป้องร่างกายด้วยกระดองทนทาน ปล่อยกระแสไฟจากปลายกรามเพื่อตอบโต้",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "バチバチ",
				'zh-tw': "劈哩啪啦",
				'th-th': "ประกายไฟ",
			},
			damage: 60,
			cost: ["Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752908,
				tcgplayer: 566178,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アゴジムシ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [737],
};

export default card;
