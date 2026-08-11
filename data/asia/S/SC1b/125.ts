import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "高傲雉雞"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "擁有高度的飛行能力。雌性擅於持久，雄性擅長速度。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "膽怯"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-50」點。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "空氣斬"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
