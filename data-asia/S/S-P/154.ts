import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪狃拉"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "成群結隊襲擊獵物。透過團隊合作，連象牙豬那樣強大的對手也能輕鬆解決。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "追打爪"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢，受到那隻寶可夢身上放置的傷害指示物的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 110,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card