import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大食花"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "被牠吞進體內的東西不管有多硬，都會被溶解液不留痕跡地融化掉。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "恐慌藤蔓"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 40,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "日光束"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card