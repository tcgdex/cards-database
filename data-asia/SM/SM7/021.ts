import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ミズゴロウ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "頭の ヒレで 水の 流れを 感じて まわりの 様子を 知る。 岩を 持ち上げる 力持ち。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずため" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[水]エネルギーを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558982,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [258],
};

export default card;
