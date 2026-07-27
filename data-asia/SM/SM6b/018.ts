import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ハスボー",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "きれいな 水を 探して 歩く。 長い 時間 水を 飲まないと 頭の 葉っぱが 枯れてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おどろかす" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559168,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [270],
};

export default card;
