import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキー",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "闇に 溶け込む 黒い 体毛。 じっと 獲物の 隙を うかがい 喉笛 目掛けて 喰いかかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かたきうち" },
			damage: "30+",
			cost: ["Darkness"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "ダークカッター" },
			damage: 60,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558697,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [197],
};

export default card;
