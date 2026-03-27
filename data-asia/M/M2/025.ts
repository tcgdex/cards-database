import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "マンムー",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "イノムー",
	},

	attacks: [
		{
			name: { ja: "ぶちこわす" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "" },
		},
		{
			name: { ja: "ふぶきのつばさ" },
			damage: 200,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [473],
};

export default card;
