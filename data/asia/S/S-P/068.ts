import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モルペコ",
		'zh-tw': "暖暖豬",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'ja-jp': "いつも お腹を すかせている。 ポケットの ような 袋に 入れた タネを 食べて 電気を つくる。",
		'zh-tw': "最喜歡吃烤過的樹果，但有時候會因為興奮過頭，把樹果烤得焦黑。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ペコペコ",
				'zh-tw': "衝撞",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を1枚引く。",
			},
		},
		{
			name: {
				'ja-jp': "でんきショック",
				'zh-tw': "烈焰",
			},
			damage: 40,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525070,
				tcgplayer: 597279,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [877],
};

export default card;
