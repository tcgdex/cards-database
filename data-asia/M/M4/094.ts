import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "チラーミィ",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぽでたたく" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [572],
};

export default card;
