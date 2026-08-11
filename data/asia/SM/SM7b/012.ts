import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "ビークイン",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "胴体が 子供たちの 巣穴に なっている。 ミツハニーの 集めた ミツで 子供たちを 育てる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "クイーンコマンド" },
			damage: 120,
			cost: ["Grass"],
			effect: {
				ja: "自分のベンチに[草]ポケモンが5匹いないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558837,
			},
		},
	],

	evolveFrom: {
		ja: "ミツハニー",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [416],
};

export default card;
