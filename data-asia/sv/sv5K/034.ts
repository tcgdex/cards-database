import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ジーランス"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [369],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "岩のように 硬い ウロコと 脂の 詰まった 浮袋で 深海の 水圧に 耐える。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きおくにもぐる"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の進化しているポケモン全員は、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ひれカッター"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card