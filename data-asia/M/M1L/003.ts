import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガフシギバナex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 380,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "ソーラートランスファー"}, "effect": {"ja": "As many times as you like during your turn, you may move a Basic Grass Energy from one of your Pokémon to another one of your Pokémon."}}],

	attacks: [{"name": {"ja": "ジャングルダンプ"}, "damage": 240, "cost": ["Grass", "Grass", "Grass", "Grass"], "effect": {"ja": "Heal 30 damage from this Pokémon"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [3],
	suffix: "EX",
};

export default card;
