import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "グライオン",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "グライガー",
	},

	attacks: [
		{
			name: { ja: "どくのサークル" },
			damage: 50,
			cost: ["Fighting"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [472],
};

export default card;
