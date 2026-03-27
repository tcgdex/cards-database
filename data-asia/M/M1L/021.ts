import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "サンドパン",
	},

	illustrator: "imoniii",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "サンド",
	},

	attacks: [{"name": {"ja": "すなかけ"}, "damage": 50, "cost": ["Colorless", "Colorless"], "effect": {"ja": "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, the attack does nothing"}}, {"name": {"ja": "Mud Shot"}, "damage": 100, "cost": ["Fighting", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [28],
};

export default card;
