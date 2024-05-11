import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘V-UNION"
	},

	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "寶可夢V-UNION放置方法"
		},

		effect: {
			'zh-tw': "對戰中可放置1次，在自己的回合將自己的棄牌區中4種皮卡丘【V-UNION】加以組合，放置於備戰區。"
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
			'zh-tw': "麻麻擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 120,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "電磁干擾"
		},

		effect: {
			'zh-tw': "在下個對手的回合，對手無法從手牌使出物品卡。"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "一同電球"
		},

		damage: 250,
		cost: ["Lightning", "Lightning", "Colorless"]
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