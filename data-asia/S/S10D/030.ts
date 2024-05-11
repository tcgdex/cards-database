import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 風速狗"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "將猛烈燃燒的火焰纏繞在牙齒上撲向獵物。雖然體型很大，卻能以靈巧的假動作戲弄敵手，那姿態就像是舞蹈一般。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "岩石粉碎"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "灼熱之角"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【火】能量，則增加80點傷害，並將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: "80+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card