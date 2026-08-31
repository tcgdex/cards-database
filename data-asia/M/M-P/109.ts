import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミズゴロウ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "頭の ひれは とても 敏感な レーダー。水や 空気の 動きから 目を 使わずに 周りの 様子を キャッチすることが できる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どろかけ" },
			damage: 40,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891897,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [258],
};

export default card;
