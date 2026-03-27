import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ルンパッパ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "ハスブレロ",
	},

	attacks: [
		{
			name: { ja: "とびかかる" },
			damage: 120,
			cost: ["Grass", "Colorless"],
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [272],
};

export default card;
