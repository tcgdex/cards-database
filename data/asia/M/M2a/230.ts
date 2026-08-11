import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガゲンガーex",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 350,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かげかくし" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分の[D]ポケモンが、相手の「ポケモンex」からワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。この特性の効果は重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヴォイドゲイル" },
			damage: 230,
			cost: ["Darkness", "Darkness"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861473,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゴースト",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [94],

	suffix: "EX",
};

export default card;
