import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッチャマ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "プライドが 高く 人から 食べ物を もらう ことを 嫌う。 長い 産毛が 寒さを 防ぐ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559758,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [393],
};

export default card;
