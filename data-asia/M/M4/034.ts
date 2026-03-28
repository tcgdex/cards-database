import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "サイコスピード"}, "cost": ["Psychic"], "damage": 30, "effect": {"ja": "のぞむなら、自分の手札が5枚になるように、山札を引く。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [386],
};

export default card;
