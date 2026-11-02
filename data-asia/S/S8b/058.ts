import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコV-UNION",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バーストホイール" },
			damage: "100×",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、その枚数×100ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586574,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [877],
};

export default card;
