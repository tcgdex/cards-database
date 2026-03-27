import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヒダルマ",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ダルマッカ",
	},

	attacks: [
		{
			name: { ja: "ほのおのたま" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [555],
};

export default card;
