import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チャーレム",
		'zh-tw': "恰雷姆",
		'th-th': "ชาเรม",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "ダンスのような 優雅な 動きで 攻撃を かわして 強烈な 一撃を 相手に お見舞いする。",
		'zh-tw': "會用跳舞般的優雅動作在躲避攻擊的同時 用強烈的一擊招呼對手。",
		'th-th': "หลบหลีกการโจมตีอย่างสง่างามราวร่ายรำ แล้วสวนกลับอีกฝ่ายอย่างรุนแรง",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ローキック",
				'zh-tw': "下盤踢",
				'th-th': "เตะต่ำ",
			},
			damage: 40,
			cost: ["Fighting"],
		},
		{
			name: {
				'ja-jp': "とびひざげり",
				'zh-tw': "飛膝踢",
				'th-th': "กระโดดแทงเข่า",
			},
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752920,
				tcgplayer: 566189,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アサナン",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [308],
};

export default card;
