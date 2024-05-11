import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝妙蛙花"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "把太陽的能源當成養分，開出碩大的花朵。總是朝著有陽光的地方移動。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "陽光綻放"
		},

		effect: {
			'zh-tw': "在自己的回合結束時，可使用1次。從牌庫抽卡直到自己的手牌滿4張為止。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "危險花粉"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】，【灼傷】與【混亂】。"
		},

		damage: 90,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card