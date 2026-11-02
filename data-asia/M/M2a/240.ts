import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガゲンガーex",
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 350,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かげかくし" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の[D]ポケモンが、相手の「ポケモンex」からワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。この特性の効果は重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヴォイドゲイル" },
			damage: 230,
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861483,
			},
		},
	],

	evolveFrom: {
		ja: "ゴースト",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [94],

	suffix: "EX",
};

export default card;
