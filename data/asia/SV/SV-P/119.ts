import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアス",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "テレパシーで 人間と 気持ちを 通わせる。 光を 屈折させる 羽毛で 別の 姿に 変わる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ミストフロート" },
			effect: {
				ja: "このポケモンに[P]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ねんどうだん" },
			damage: 100,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 740420,
				tcgplayer: 587869,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [380],
};

export default card;
