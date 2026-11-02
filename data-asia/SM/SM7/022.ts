import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ミズゴロウ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "頭の ヒレで 水の 流れを 感じて まわりの 様子を 知る。 岩を 持ち上げる 力持ち。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558983,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [258],
};

export default card;
