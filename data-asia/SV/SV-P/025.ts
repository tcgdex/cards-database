import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
		'zh-tw': "呆火鱷",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "電気を 蓄えすぎた 結果 体の 表面に 産毛すら 生えない 部分が できてしまった。",
		'zh-tw': "火囊很小，因此能量會溢出來，在牠頭上的凹槽那裡搖曳晃動。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "バチバチ",
				'zh-tw': "咬",
			},
			damage: 30,
			cost: ["Lightning"],
		},
		{
			name: {
				ja: "げきでんりゅう",
				'zh-tw': "烈焰",
			},
			damage: 80,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693186,
				tcgplayer: 587782,
			},
		},
	],

	evolveFrom: {
		ja: "メリープ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [180],
};

export default card;
