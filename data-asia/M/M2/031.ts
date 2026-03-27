import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワン",
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ワンパチ",
	},

	attacks: [
		{
			name: { ja: "エレクトロラン" },
			damage: 70,
			cost: ["Lightning", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [836],
};

export default card;
