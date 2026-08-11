import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒメグマ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ミツを見つけると 三日月模様が 輝く。甘いミツが 染みこんだ 手のひらを いつも なめている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "きりさく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554982,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [216],
};

export default card;
