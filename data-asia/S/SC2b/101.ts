import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大王銅象"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	description: {
		'zh-tw': "綠色的皮膚非常耐水。在很久以前從其他地區過來，之後便一直與人類一起工作。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "抗菌皮膚"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會陷入特殊狀態。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "復仇踩踏"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加120點傷害。"
		},

		damage: "120+",
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
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
