import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラティアスex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スカイライン" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のたねポケモン全員のにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "むげんのやいば" },
			damage: 200,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861318,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [380],

	suffix: "EX",
};

export default card;
