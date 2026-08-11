import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈罩夜菇"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "用孢子閃爍著的光吸引獵物，讓對方睡著。會從指尖吸收精氣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "閃爍之光"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，受到這個招式的寶可夢無法使用招式。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "森林恐懼"
		},

		effect: {
			'zh-tw': "若場上有「迷光森林」，則增加60點傷害。"
		},

		damage: "60+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
