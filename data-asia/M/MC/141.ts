import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデ",
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "発熱時の 体温は およそ ８００度。 体を 鞭のように しならせて 跳びかかってくるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "もえるねっぱ" },
			damage: 130,
			cost: ["Fire"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ヒートブラスト" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863437,
			},
		},
	],

	evolveFrom: {
		ja: "ヤクデ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [851],
};

export default card;
