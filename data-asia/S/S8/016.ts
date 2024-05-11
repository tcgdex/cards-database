import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔蟻獸"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'zh-tw': "將火焰當成舌頭來使用。會一點一點地熔化鐵蟻堅硬的外骨骼，然後把牠吃掉。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火焰纏身"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【火】能量卡，附於這隻寶可夢身上。"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "激動火焰"
		},

		effect: {
			'zh-tw': "若身上附有的能量比使用這個招式所需的能量多3個，則對手的1隻備戰寶可夢也受到180點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card