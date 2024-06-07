import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈焰馬"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'zh-tw': "任由燃燒的鬃毛隨風飄揚，以每小時２４０公里的速度 在大草原上自在奔馳。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "烈焰"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火焰陣"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card