import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "かがやくリザードン"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "エキサイトハート"
		},

		effect: {
			'ja-jp': "相手がすでにとったサイドの枚数ぶん、このポケモンがワザを使うためのエネルギーは少なくなる。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "かえんばく"
		},

		damage: 250,

		effect: {
			'ja-jp': "次の自分の番、このポケモンは「かえんばく」が使えない。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	rarity: "None"
}

export default card