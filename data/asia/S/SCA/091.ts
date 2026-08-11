import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "銃嘴大鳥"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "讓鳥嘴發熱來戰鬥。那溫度足足超過１００度，只要被啄到就會嚴重灼傷。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "能量切割"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "閉環加農炮"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，放回手牌。"
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card