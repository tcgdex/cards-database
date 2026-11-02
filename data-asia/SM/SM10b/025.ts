import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "アーボ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "顎を 外すことで 自分より 大きな 獲物も 丸呑みに する。 食後は 身体を 丸め 休む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぽではたく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557226,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [23],
};

export default card;
