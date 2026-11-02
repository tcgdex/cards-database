import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキー",
	},

	illustrator: "Iori Suzuki",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "月の 光が イーブイの 遺伝子を 変化させた。 闇に 潜み 獲物を 待つ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かたきうち" },
			damage: "30+",
			cost: ["Darkness"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、100ダメージ追加。",
			},
		},
		{
			name: { ja: "やみのキバ" },
			damage: 100,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908255,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [197],
};

export default card;
