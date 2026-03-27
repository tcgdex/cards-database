import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "デカグース",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ヤングース",
	},

	abilities: [{"type": "Ability", "name": {"ja": "Look for Clues"}, "effect": {"ja": "Once during your turn, you may switch a card from your hand with the top card of your deck."}}],

	attacks: [{"name": {"ja": "かみつく"}, "damage": 50, "cost": ["Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [735],
};

export default card;
