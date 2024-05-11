import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉帝亞斯"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'zh-tw': "透過心靈感應和人類交流情感。會用能令光線折射的羽毛變化成其他的樣子。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "紅色支援"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張【超】能量卡，附於自己的「拉帝歐斯」身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "力之屏障"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「寶可夢【VMAX】」招式的傷害。"
		},

		damage: 70,
		cost: ["Fire", "Psychic", "Colorless"]
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card