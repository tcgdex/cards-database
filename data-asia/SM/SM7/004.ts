import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュカイン",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "ジャングルを 身軽に 走り回り 腕に 生えた 切れ味 鋭い 葉っぱで 獲物を しとめるのだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ネイチャーパワー" },
			effect: {
				ja: "このポケモンがいるかぎり、[草]エネルギーがついている自分のポケモン全員は、相手の「ウルトラビースト」からワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワフルストーム" },
			damage: "20×",
			cost: ["Grass"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558965,
			},
		},
	],

	evolveFrom: {
		ja: "ジュプトル",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [254],
};

export default card;
