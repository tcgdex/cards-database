import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝水箭龜"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'zh-tw': "會用重量驚人的身體壓住對手使其昏厥。遇到危險時會躲進殼裡。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "水泵射擊"
		},

		effect: {
			'zh-tw': "在自己的回合，若從自己的手牌將1張【水】能量卡丟棄，則可使用1次。在對手的1隻備戰寶可夢身上放置2個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "激流炮"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「激流炮」。"
		},

		damage: 170,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card