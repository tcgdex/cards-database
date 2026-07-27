import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニダンギル",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "２本の 剣による 複雑な 連続攻撃を 防ぐことは 剣の 達人でも 不可能だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どうぐおとし" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "おたがいの場のポケモンについている「ポケモンのどうぐ」の数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558617,
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
