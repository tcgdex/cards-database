import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクロッグ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "グレッグル",
	},

	attacks: [{"name": {"ja": "Reckless Charge"}, "damage": 70, "cost": ["Fighting"], "effect": {"ja": "This Pokémon also does 20 damage to itself"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [454],
};

export default card;
