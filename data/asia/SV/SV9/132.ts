import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スパイクエネルギー"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807719,
				tcgplayer: 615008,
			},
		},
	],

	rarity: "None",
	category: "Energy",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを2個のせる。"
	},

	energyType: "Special"
}

export default card