import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ニダンギル",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "２本の 剣による 複雑な 連続攻撃を 防ぐことは 剣の 達人でも 不可能だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "やいばののろい" },
			cost: ["Psychic"],
			effect: {
				ja: "「ポケモンのどうぐ」がついている相手のポケモン全員に、それぞれダメカンを3個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559579,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトツキ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [680],
};

export default card;
