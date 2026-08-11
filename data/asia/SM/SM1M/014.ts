import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペリッパー",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'ja-jp': "餌集めは 若い ♂の 仕事。 大きなクチバシに 餌を 溜めて 仲間が 待つ 巣まで 運ぶ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はこびや" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモン1匹と、ついているすべてのカードを、手札にもどす。",
			},
		},
		{
			name: { ja: "そらをとぶ" },
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561615,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キャモメ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [279],
};

export default card;
