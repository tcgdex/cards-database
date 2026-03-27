import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "コジオ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "たいあたり"}, "cost": ["Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [932],
};

export default card;
