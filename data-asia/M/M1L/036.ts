import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "キョジオーン",
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "ジオヅム",
	},

	abilities: [{"type": "Ability", "name": {"ja": "Power Salt"}, "effect": {"ja": "Attacks used by your Pokémon deal 30 more damage to your opponent's Active Pokémon."}}],

	attacks: [{"name": {"ja": "Hammer In"}, "damage": 130, "cost": ["Fighting", "Fighting", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [934],
};

export default card;
