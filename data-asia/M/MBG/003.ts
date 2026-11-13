import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "メガゲンガーex"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [94],
	hp: 350,
	types: ["Darkness"],

	evolveFrom: {
		ja: "ゴースト"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かげかくし"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の{D}ポケモンが、相手の「ポケモンex」からワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。この特性の効果は重ならない。"
		}
	}],

	attacks: [{
		name: {
			ja: "ヴォイドゲイル"
		},

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		},

		damage: 230,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 846820,
				tcgplayer: 653856,
				cardtrader: 345808,
			},
		},
	]
}

export default card
