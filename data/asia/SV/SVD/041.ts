import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光蚪仔"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "會搖尾巴來發電。感覺到有危險時， 會閃爍頭部通知夥伴。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電流攻擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card