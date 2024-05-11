import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "薩戮德V"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "束縛"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "叢林攀升"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇最多2張基本能量卡，以任意方式附於備戰寶可夢身上。然後，將附上這些卡的寶可夢的HP全部恢復。"
		},

		damage: 100,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
