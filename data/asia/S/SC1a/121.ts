import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "被稱為傳說中的英雄。能夠吸收金屬，將之轉化為武器來戰鬥。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬碎"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "金屬利刃"
		},

		effect: {
			'zh-tw': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 190,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card