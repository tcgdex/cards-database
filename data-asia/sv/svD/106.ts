import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "一家鼠"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "身型大的２隻會在戰鬥的同時保護著孩子。對抗實力 強大的對手時會集體出陣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "巴掌"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "家族攻擊"
		},

		effect: {
			'zh-tw': "造成自己的場上的「一家鼠」的數量×70點傷害。"
		},

		damage: "70×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card