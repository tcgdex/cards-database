import { Card } from "../../../interfaces"
import Set from "../SP5"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響V-UNION"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "寶可夢V-UNION放置方法"
		},

		effect: {
			'zh-tw': "對戰中可放置1次，在自己的回合將自己的棄牌區中4種蒼響【V-UNION】加以組合，放置於備戰區。"
		}
	}, {
		name: {
			'zh-tw': "聯盟增輝"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【鋼】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "劍王之舞"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-150」點。"
		},

		damage: 150,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "鋼鐵斬"
		},

		damage: 200,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "精湛利刃"
		},

		effect: {
			'zh-tw': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 340,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "V-UNION規則"
		},

		effect: {
			'zh-tw': "寶可夢【V-UNION】【氣絕】時，對手獲得3張獎賞卡。"
		}
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
	regulationMark: "E"
}

export default card