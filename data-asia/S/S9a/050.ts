import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大狼犬"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "會組成約１０隻規模的群體， 靠著有條不紊的團隊合作 追擊並解決獵物。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "喧鬧咆哮"
		},

		effect: {
			'zh-tw': "若對手的場上有「寶可夢【VMAX】」，則這隻寶可夢使用招式所需的能量，減少3個【無】能量。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "狂野衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。"
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card