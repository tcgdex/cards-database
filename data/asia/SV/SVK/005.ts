import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "かがやくフーディン"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ペインスプーン"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。相手の場のポケモン1匹にのっているダメカンを2個まで選び、相手の別のポケモン1匹にのせ替える。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "マインドルーラー"
		},

		damage: "20×",

		effect: {
			'ja-jp': "相手の手札の枚数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	rarity: "None"
}

export default card