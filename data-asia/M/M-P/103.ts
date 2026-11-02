import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼニガメ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "長い 首を 甲羅のなかに 引っこめるとき 勢いよく 水鉄砲を 発射する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あわ" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891801,
			},
		},
	],

	retreat: 2,
	rarity: "Promo",
	dexId: [7],
};

export default card;
