import { Card } from "../../../interfaces"
import Set from "../SVJL"

const card: Card = {
	set: Set,

	name: {
		ja: "かがやくリザードン"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エキサイトハート"
		},

		effect: {
			ja: "相手がすでにとったサイドの枚数ぶん、このポケモンがワザを使うためのエネルギーは少なくなる。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "かえんばく"
		},

		damage: 250,

		effect: {
			ja: "次の自分の番、このポケモンは「かえんばく」が使えない。"
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