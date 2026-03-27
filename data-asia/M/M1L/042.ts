import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "フォクスライ",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "クスネ",
	},

	attacks: [{"name": {"ja": "Greedy Hunt"}, "damage": 20, "cost": ["Colorless"], "effect": {"ja": "You may draw cards until you have 6 cards in your hand"}}, {"name": {"ja": "Pitch-Black Fangs"}, "damage": 60, "cost": ["Darkness", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [828],
};

export default card;
