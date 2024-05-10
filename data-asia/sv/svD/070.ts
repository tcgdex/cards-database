import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帕底亞 土王"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'zh-tw': "一旦遭到敵人襲擊，就會從胴體伸出粗壯的刺來反擊。 是需有覺悟承受劇痛的危險招式。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "毒陣"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "泥水之錘"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。"
		},

		damage: 100,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card