import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロスター",
		'zh-tw': "鋼炮臂蝦",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "右腕の 身は よく締まっている。 もげた ハサミは 食材 として 海外に 輸出 される。",
		'zh-tw': "右臂的肉非常緊實飽滿。脫落下來的鉗子會被當成食材外銷到海外。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ねらいうち",
				'zh-tw': "狙擊",
			},
			cost: ["Water"],
			effect: {
				ja: "相手のベンチポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻備戰寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "クラブハンマー",
				'zh-tw': "蟹鉗錘",
			},
			damage: 110,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571590,
				tcgplayer: 569331,
			},
		},
	],

	evolveFrom: {
		ja: "ウデッポウ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [693],
};

export default card;
