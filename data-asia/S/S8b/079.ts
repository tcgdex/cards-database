import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "以歐路普"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "釋放出精神力量來調查周圍的情況。牠的偵測範圍甚至可以達到方圓１０公里。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "進化掌控"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多與這隻寶可夢身上附加的能量相同數量的【2階進化】寶可夢卡（「以歐路普」除外），放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "意念頭錘"
		},

		damage: 120,
		cost: ["Psychic", "Colorless", "Colorless"]
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
	regulationMark: "E"
}

export default card