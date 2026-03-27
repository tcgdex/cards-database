import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ナカヌチャン",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "カヌチャン",
	},

	abilities: [{"type": "Ability", "name": {"ja": "Sudden Hammer"}, "effect": {"ja": "Once during your turn, when you play this card from your hand to evolve one of your Pokemon, you may flip a coin. If heads, discard an Energy from your opponent's Active Pokémon."}}],

	attacks: [{"name": {"ja": "Wham"}, "damage": 30, "cost": ["Metal"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [958],
};

export default card;
