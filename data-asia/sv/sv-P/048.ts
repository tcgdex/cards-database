import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "普隆隆姆"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'zh-tw': "在增加到了８個的汽缸裡 引爆混有毒素和岩石成分的 氣體來製造能量。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "虛張聲勢"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "宏大衝撞"
		},

		effect: {
			'zh-tw': "若自己手牌的張數比對手手牌的張數多，則增加80點傷害。"
		},

		damage: "70+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card