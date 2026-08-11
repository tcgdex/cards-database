import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "自慢のツノを 相手の お腹の 下に ねじこみ 一気に 持ち上げ ぶん投げてしまう 力持ち。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "こんじょう" },
			effect: {
				ja: "このポケモンが、ワザのダメージを受けてきぜつするとき、コインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "なげとばす" },
			damage: 50,
			cost: ["Grass", "Grass"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561068,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [214],
};

export default card;
