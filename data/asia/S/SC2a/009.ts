import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大針蜂"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "大針蜂非常重視自己的地盤，為了安全起見，最好不要接近牠的住處。一旦生氣就會成群結隊襲擊而來。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "毒擊"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 80,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
