import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Clog"}, "cost": ["Colorless"], "effect": {"ja": "Search your deck for 1 Basic  Energy and attach it to this Pokémon. Then, shuffle your deck"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [102],
};

export default card;
