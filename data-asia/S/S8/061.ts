import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 堵攔熊"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		'zh-tw': "在不斷的鬥爭中得到了進化。牠交叉著雙臂發出的怒吼能讓一切對手都為之膽怯。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "封口"
		},

		effect: {
			'zh-tw': "選擇對手的戰鬥寶可夢持有的1個招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "狠心一擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加90點傷害。"
		},

		damage: "60+",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card