import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可V-UNION"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "寶可夢V-UNION放置方法"
		},

		effect: {
			'zh-tw': "對戰中可放置1次，在自己的回合將自己的棄牌區中4種莫魯貝可【V-UNION】加以組合，放置於備戰區。"
		}
	}, {
		name: {
			'zh-tw': "聯盟增輝"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【雷】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "吃到飽"
		},

		effect: {
			'zh-tw': "從牌庫抽卡直到自己的手牌滿10張為止。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "爆炸輪"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄，造成其張數×100點傷害。"
		},

		damage: "100×",
		cost: ["Lightning", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "雷電球"
		},

		damage: 160,
		cost: ["Lightning", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "V-UNION規則"
		},

		effect: {
			'zh-tw': "寶可夢【V-UNION】【氣絕】時，對手獲得3張獎賞卡。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card