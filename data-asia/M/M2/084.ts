import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュゴン",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "パウワウ",
	},

	attacks: [
		{
			name: { ja: "スラム" },
			damage: 70,
			cost: ["Water", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [87],
};

export default card;
