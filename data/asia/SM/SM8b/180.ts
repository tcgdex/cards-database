import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ウソッキー",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "襲われないため 樹木の 真似を するが 嫌いな 水を かけられて あわてて 逃げだしていく。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みちをふさぐ" },
			effect: {
				ja: "このポケモンがいるかぎり、相手がベンチに出せるポケモンの数は、4匹になる。相手のベンチに5匹以上いる場合は、相手はベンチが4匹になるまでポケモンをトラッシュする。［ベンチの数を変更する効果は、少ない数が優先される。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "いわおとし" },
			damage: 40,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551396,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [185],
};

export default card;
