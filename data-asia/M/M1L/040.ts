import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタル",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Clutch"}, "damage": 20, "cost": ["Darkness"], "effect": {"ja": "During your opponent's next turn, the Defending Pokémon can't retreat."}}, {"name": {"ja": "Dark Feather"}, "damage": 110, "cost": ["Darkness", "Darkness", "Colorless"]}],

	weaknesses: [{"type": "Electric", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [717],
};

export default card;
