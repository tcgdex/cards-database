import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "掘地兔"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'zh-tw': "肚子上的體毛保溫性能優秀。在過去，人們會用牠掉落的毛來製作保暖服裝。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "猛撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card