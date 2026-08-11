import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "がんばりハート" },
			effect: {
				ja: "このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、きぜつせず、残りHPが「10」の状態で場に残る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "トパーズボルト" },
			damage: 300,
			cost: ["Grass", "Lightning", "Metal"],
			effect: {
				ja: "このポケモンについているエネルギーを3個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793602,
				tcgplayer: 587703,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
	dexId: [25],

	suffix: "EX",
};

export default card;
