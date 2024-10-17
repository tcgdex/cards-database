import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "八爪武師",
		'zh-cn': "八爪武師",
		ja: "オトスパス"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "全身都是肌肉。 會用觸手施展絞技， 威力無與倫比。",
		'zh-cn': "全身都是肌肉。 會用觸手施展絞技， 威力無與倫比。",
		ja: "全身が 筋肉の 塊。 触手を 使って 繰りだす 絞め技の 威力は 凄まじい。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈打",
			'zh-cn': "劈打",
			ja: "チョップ"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "觸手激怒",
			'zh-cn': "觸手激怒",
			ja: "テンタクルレイジ"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則這個招式只需要1個【鬥】能量即可使用。",
			'zh-cn': "若這隻寶可夢身上放置有傷害指示物，則這個招式只需要1個【鬥】能量即可使用。",
			ja: "このワザは、このポケモンにダメカンがのっているなら、エネルギー1個で使える。"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [853]
}

export default card