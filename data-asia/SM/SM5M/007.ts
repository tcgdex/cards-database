import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ブイゼル",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "首の 浮き袋を ふくらませ 水面から 顔を だして 辺りの 様子を うかがっている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559820,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [418],
};

export default card;
