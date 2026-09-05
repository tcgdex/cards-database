import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メガゼラオラex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サンダーフィスト" },
			damage: "60×",
			cost: ["Lightning"],
		},
		{
			name: { ja: "ゼプトターン" },
			damage: 150,
			cost: ["Lightning", "Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 1,
	rarity: "Promo",
	dexId: [807],

	suffix: "EX",
};

export default card;
