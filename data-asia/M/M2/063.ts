import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリジュラス",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ジュラルドン",
	},

	attacks: [
		{
			name: { ja: "コーティングアタック" },
			damage: 120,
			cost: ["Metal", "Metal", "Metal"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [1018],
};

export default card;
