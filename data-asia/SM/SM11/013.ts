import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ケイコウオ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "ピンク色の 模様は 夜になると 光りだす。 ダイバーに 人気なので リゾート地では 餌付けされることも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かぜおこし" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556972,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [456],
};

export default card;
