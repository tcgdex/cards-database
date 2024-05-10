import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吃吼霸"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'zh-tw': "雖然是個大胃王， 但不擅長捕食。 會和米立龍聯手捕捉獵物。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "必殺波"
		},

		effect: {
			'zh-tw': "擲2次硬幣，若全部為正面，則增加100點傷害。"
		},

		damage: "100+",
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card