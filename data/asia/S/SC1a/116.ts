import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大王銅象"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	description: {
		'zh-tw': "綠色的皮膚非常耐水。在很久以前從其他地區過來，之後便一直與人類一起工作。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "挖掘吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 60,
		cost: ["Metal", "Metal"]
	}, {
		name: {
			'zh-tw': "剛腕之鼻"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有8個以上的傷害指示物，則這個招式失敗。"
		},

		damage: 220,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card