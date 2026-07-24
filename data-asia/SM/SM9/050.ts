import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "バリヤード",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "素晴らしい パントマイムの 腕前。 見とれている 間に いつの間にか 本当に 壁が できているのだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かいしゅうふうじ" },
			effect: {
				ja: "このポケモンがいるかぎり、ダメカンがのっている相手のポケモンと、そのポケモンについているすべてのカードは、手札にもどせない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ねんりき" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558358,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [122],
};

export default card;
