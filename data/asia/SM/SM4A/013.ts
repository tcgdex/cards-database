import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ミロカロス",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "最も 美しい ポケモンとも 呼ばれ 多くの 芸術家に インスピレーションを 与えてきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いつくしむ" },
			cost: ["Water"],
			effect: {
				ja: "ダメカンがのっている相手のベンチポケモン1匹と、ついているすべてのカードを、山札にもどして切る。",
			},
		},
		{
			name: { ja: "オーシャンサイクロン" },
			damage: 80,
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560258,
			},
		},
	],

	evolveFrom: {
		ja: "ヒンバス",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [350],
};

export default card;
