import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ザシアン",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リミットブレイク" },
			damage: 50,
			cost: ["Psychic", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [888],
};

export default card;
