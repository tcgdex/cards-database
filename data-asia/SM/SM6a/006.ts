import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヒダルマ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "体内で １４００度の 炎を 燃やすことで ダンプカーを パンチで 破壊するほどの パワーを 作る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ヒートアシスト" },
			cost: ["Fire"],
			effect: {
				ja: "自分の手札にある[炎]エネルギーを3枚まで、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "だるまれんだん" },
			damage: "30+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "コインを4回投げ、オモテの数x50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559242,
			},
		},
	],

	evolveFrom: {
		ja: "ダルマッカ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [555],
};

export default card;
