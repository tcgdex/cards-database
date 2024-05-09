import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "イルカマンex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "PLANETA Mochizuki",
	hp: 340,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マイティソウル"
		},

		effect: {
			ja: "このカードは、「イルカマン」の特性「マイティチェンジ」の効果によってしか場に出せない。"
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ギガインパクト"
		},

		damage: 250,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card
