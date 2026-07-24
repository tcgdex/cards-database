import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "パチリス",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "たまった 電気を 分け与えようと ほほ袋を こすり合わせる パチリスを 見かけることも ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すりすりはつでん" },
			cost: ["Lightning"],
			effect: {
				ja: "自分のベンチにいるワザ「ほっぺすりすり」を持つポケモン全員に、山札にある[雷]エネルギーを1枚ずつつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ほっぺすりすり" },
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550661,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [417],
};

export default card;
