import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "百變怪"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "能夠藉由重組全身的細胞，變得與看到的東西一模一樣，然而一旦放鬆就會變回原形。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "突然變化"
		},

		effect: {
			'zh-tw': "這隻寶可夢可使用自己棄牌區的【基礎】寶可夢（「擁有規則的寶可夢」除外）持有的所有招式。[需要有足夠使用招式的能量。]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card