import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "墓揚犬"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "平時都在墳場裡睡覺。 在為數眾多的犬寶可夢中， 牠是對主人最為忠實的。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "掘出"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張物品卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "陰森射擊"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card