import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロス",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もうれつとつげき" },
			damage: 40,
			cost: ["Fighting"],
			effect: { ja: "" },
		},
		{
			name: { ja: "すてみタックル" },
			damage: 70,
			cost: ["Fighting", "Fighting"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [128],
};

export default card;
