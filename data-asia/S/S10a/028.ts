import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風鈴鈴"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "擁有超音波的叫聲。輕飄飄地浮起來， 乘著風旅行到遠方。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "美夢音色"
		},

		effect: {
			'zh-tw': "在下個對手的回合，若對手從手牌將能量卡附於受到這個招式的寶可夢身上，則將那隻寶可夢【睡眠】。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "垂吊"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card