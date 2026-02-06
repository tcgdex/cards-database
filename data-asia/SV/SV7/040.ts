import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄飄球",
		'zh-cn': "飄飄球",
		ja: "フワンテ"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "漫無目的浮在空中的樣子， 使牠在某些民間故事裡 被相傳為迷途靈魂的路標。",
		'zh-cn': "漫無目的浮在空中的樣子， 使牠在某些民間故事裡 被相傳為迷途靈魂的路標。",
		ja: "あてもなく 浮かぶ 様子から 迷える 魂の道しるべ と 伝える 昔話も ある。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "膨脹",
			'zh-cn': "膨脹",
			ja: "ふくらむ"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-10」點。",
			'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害「-10」點。",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [425],

	thirdParty: {
		cardmarket: 779054
	}
}

export default card