import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オオタチ",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "細長い 巣穴で 子育て。 子供が 育つと 巣穴の 外で 独り立ちの 準備を させる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 40,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ジェットヘッド" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863873,
			},
		},
	],

	evolveFrom: {
		ja: "オタチ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [162],
};

export default card;
