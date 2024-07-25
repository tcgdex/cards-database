import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪狃拉"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "４～５隻一組行動。 在岩石和樹木上留下記號， 以團隊合作捕殺獵物。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 40,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰雹爪"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄，將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 70,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card