import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨石丁"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "佇立在大草原上，每天眺望著日升日落。 擅長強而有力的踢技。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "力量尖石"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇最多2張【鬥】能量卡，以任意方式附於自己的寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "放逐射擊"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡放置於放逐區。"
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card