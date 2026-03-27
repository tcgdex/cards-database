import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ルナトーン",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "Lunar Cycle"}, "effect": {"ja": "Once during your turn, if Solrock is on your Bench, you may discard a Basic Fighting Energy. If you do, draw 3 cards. You can't use more than one Lunar Cycle Ability during your turn."}}],

	attacks: [{"name": {"ja": "パワージェム"}, "damage": 50, "cost": ["Fighting", "Fighting"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [337],
};

export default card;
