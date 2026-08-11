import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "シズクモ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "シズクモ同士が 出会うと 頭の 水泡を 自慢し アピールする。 小さな 方が 道を 譲る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 40,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555148,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [751],
};

export default card;
