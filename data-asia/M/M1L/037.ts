import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "シザリガー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ヘイガニ",
	},

	attacks: [{"name": {"ja": "Vise Grip"}, "damage": 30, "cost": ["Colorless"]}, {"name": {"ja": "Payback Scissors"}, "damage": 130, "cost": ["Darkness", "Darkness", "Colorless"], "effect": {"ja": "If this Pokémon has any damage counters on it, this attack can be used for 1  Energy."}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [342],
};

export default card;
