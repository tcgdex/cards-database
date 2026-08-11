import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャラランガ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'ja-jp': "敵を 見ると 尻尾の ウロコを ジャラジャラ 鳴らして いかく。 弱い者は あわてて 逃げ出す。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ウォークライ" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の場のポケモンの数が、相手の場のポケモンの数より少ないなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "スケイルノイズ" },
			damage: 130,
			cost: ["Lightning", "Fighting", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「+30」される。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560286,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ジャランゴ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [784],
};

export default card;
