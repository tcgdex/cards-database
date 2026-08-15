import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッチャマ",
	},

	illustrator: "Saboteri",
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
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891818,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [393],
};

export default card;
