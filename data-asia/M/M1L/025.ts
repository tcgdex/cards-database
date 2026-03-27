import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリテヤマ",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "マクノシタ",
	},

	abilities: [{"type": "Ability", "name": {"ja": "Sumo Catcher"}, "effect": {"ja": "Once during your turn, when you play this card from your hand to evolve one of your Pokémon, you may switch one of your opponent's Benched Pokémon with their Active Pokémon."}}],

	attacks: [{"name": {"ja": "Wild Press"}, "damage": 210, "cost": ["Fighting", "Fighting", "Fighting"], "effect": {"ja": "This Pokémon does 70 damage to itself."}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [297],
};

export default card;
