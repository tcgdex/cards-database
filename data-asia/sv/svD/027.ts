import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "呱呱泡蛙"
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "以細膩的泡泡包住身體，保護皮膚。裝出一副悠閒的樣子， 但其實精明地打量著四周。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "躍起探看"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card