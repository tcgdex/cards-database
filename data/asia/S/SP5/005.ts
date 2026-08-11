import { Card } from "../../../interfaces"
import Set from "../SP5"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超夢V-UNION"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "光子屏障"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "寶可夢V-UNION放置方法"
		},

		effect: {
			'zh-tw': "對戰中可放置1次，在自己的回合將自己的棄牌區中4種超夢【V-UNION】加以組合，放置於備戰區。"
		}
	}, {
		name: {
			'zh-tw': "聯盟增輝"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【超】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "超再生"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「200」HP。"
		},

		cost: ["Psychic", "Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "精神爆發"
		},

		effect: {
			'zh-tw': "將16個傷害指示物以任意方式放置於對手的寶可夢身上。"
		},

		cost: ["Psychic", "Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "終期灼燒"
		},

		damage: 300,
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "V-UNION規則"
		},

		effect: {
			'zh-tw': "寶可夢【V-UNION】【氣絕】時，對手獲得3張獎賞卡。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card