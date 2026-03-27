import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "イシヘンジン",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Stone Kick"}, "damage": 20, "cost": ["Fighting"], "effect": {"ja": "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon)"}}, {"name": {"ja": "Boundless Power"}, "damage": 140, "cost": ["Fighting", "Fighting", "Colorless"], "effect": {"ja": "During your next turn, this Pokémon can't attack."}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [874],
};

export default card;
