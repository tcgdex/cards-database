import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幸福蛋"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	description: {
		'zh-tw': "發現虛弱的寶可夢時就會把自己的蛋分給牠，並且一直照顧對方直到牠痊癒。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "全滿蛋"
		},

		effect: {
			'zh-tw': "選擇自己的1隻備戰寶可夢，將HP全部恢復。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "意念頭錘"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card