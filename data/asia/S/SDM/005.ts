import { Card } from "../../../interfaces"
import Set from "../SDM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "象徵鳥"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "利用精神力量在空中飛翔，被稱為古代都市的守護神。 也有人認為牠是守護神的使者。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "三重裝填"
		},

		effect: {
			'zh-tw': "擲3次硬幣，從自己的棄牌區選擇最多與正面出現的次數相同數量的基本能量卡，以任意方式附於備戰寶可夢身上。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "精神強念"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card