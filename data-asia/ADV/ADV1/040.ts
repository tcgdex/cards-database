import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "オオスバメ"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [277],
	hp: 70,
	types: ["Colorless"],

	evolveFrom: {
		ja: "スバメ"
	},

	stage: "Stage1",

	abilities: [{
		type: "Poke-POWER",

		name: {
			ja: "おいはらう"
		},

		effect: {
			ja: "このパワーは、このポケモンがバトル場にいるなら、自分の番に1回使うことができる。相手のバトルポケモンを1匹選び、相手のベンチポケモンと入れ替える。入れ替えるベンチポケモンは相手プレイヤーが選ぶ。このポケモンが特殊状態なら、このパワーを使うことはできない。"
		}
	}],

	attacks: [{
		name: {
			ja: "つばさでうつ"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784524,
				tcgplayer: 613076,
				cardtrader: 138024,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784524,
				tcgplayer: 613076,
				cardtrader: 138024,
			},
		},
	]
}

export default card
