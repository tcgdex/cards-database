import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チャオブー",
		'zh-tw': "炒炒豬",
		'th-th': "จาโอบู",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'ja-jp': "体内の 炎が 燃え上がると 動きの キレと スピードが 増す。 ピンチになると 煙を 噴き出す。",
		'zh-tw': "當體內的火焰熊熊燃燒時，行動就會變得更加敏捷俐落。遇到危機時會噴出煙霧。",
		'th-th': "พอเปลวไฟในตัวลุกไหม้ จะขยับตัวได้ฉับไวและเร็วขึ้น เมื่อเข้าตาจน จะพ่นควันออกมา",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ぶつかる",
				'zh-tw': "衝撞",
				'th-th': "กระแทก",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				'ja-jp': "かえん",
				'zh-tw': "烈焰",
				'th-th': "เผาไหม้",
			},
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533277,
				tcgplayer: 568959,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ポカブ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [499],
};

export default card;
