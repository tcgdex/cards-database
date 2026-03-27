import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パウワウ",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バブルドレイン" },
			damage: 20,
			cost: ["Water", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [86],
};

export default card;
