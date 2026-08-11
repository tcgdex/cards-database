import { Card } from "models/database/card";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケケンカニ",
		'zh-tw': "好勝毛蟹",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'ja-jp': "考えるより まず 殴ってみる。 ゆきなだれを パンチの ラッシュで 押し返したという 記録も ある。",
		'zh-tw': "習慣不經過大腦先動手打了再說。以前曾有過用連續不斷的拳擊把雪崩推回去的紀錄。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ダブルラリアット",
				'zh-tw': "雙重金勾臂",
			},
			damage: "90×",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数×90ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。",
			},
		},
		{
			name: {
				'ja-jp': "クラブハンマー",
				'zh-tw': "蟹鉗錘",
			},
			damage: 130,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560815,
				tcgplayer: 569269,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マケンカニ",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Common",
	dexId: [740],
};

export default card;
