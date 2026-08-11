import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍奇"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "飛行速度為每小時２００公里。與多龍梅西亞一起戰鬥，到牠進化為止都會細心照顧。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "召喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張「多龍梅西亞」卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card