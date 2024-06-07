import { Card } from "../../../interfaces"
import Set from "../SP5"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甲賀忍蛙V-UNION"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "忍之身軀"
		},

		effect: {
			'zh-tw': "對手從手牌使出物品時，這隻寶可夢不會受到其效果的影響。"
		}
	}, {
		type: "Ability",

		name: {
			'zh-tw': "解毒術"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會【中毒】。"
		}
	}, {
		type: "Ability",

		name: {
			'zh-tw': "踩穩"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "寶可夢V-UNION放置方法"
		},

		effect: {
			'zh-tw': "對戰中可放置1次，在自己的回合將自己的棄牌區中4種甲賀忍蛙【V-UNION】加以組合，放置於備戰區。"
		}
	}, {
		name: {
			'zh-tw': "聯盟增輝"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【水】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "水之刀鋒"
		},

		damage: 130,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "龍捲風手裏劍"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢各受到100點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "瀑布束縛"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。查看對手的手牌。"
		},

		damage: 180,
		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "V-UNION規則"
		},

		effect: {
			'zh-tw': "寶可夢【V-UNION】【氣絕】時，對手獲得3張獎賞卡。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card