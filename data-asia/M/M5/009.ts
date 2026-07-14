import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "発熱時の 体温は およそ ８００度。 体を 鞭のように しならせて 跳びかかってくるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "のやき" },
			cost: ["Fire"],
			effect: {
				ja: "相手の山札を上から2枚トラッシュする。",
			},
		},
		{
			name: { ja: "ヒートタックル" },
			damage: 160,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	evolveFrom: {
		ja: "ヤクデ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [851],

	thirdParty: {
		cardmarket: 888246,
	},
};

export default card;
