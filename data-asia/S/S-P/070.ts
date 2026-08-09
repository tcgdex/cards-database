import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "フクスロー",
		'zh-tw': "月亮伊布",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "刃羽根 と 呼ばれる ナイフのような 羽根を 立て続けに 投げて 敵の 急所を 確実に つらぬく。",
		'zh-tw': "在滿月之夜或是興奮的時候，牠身上圈圈一樣的花紋就會發出金黃色的光。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "はっぱカッター",
				'zh-tw': "暗中奇襲",
			},
			damage: 40,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525080,
				tcgplayer: 597281,
			},
		},
	],

	evolveFrom: {
		ja: "モクロー",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [723],
};

export default card;
