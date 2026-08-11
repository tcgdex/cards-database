import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麒麟奇"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "雖然尾巴上的腦袋小到無法思考，但因為不睡覺也沒關係，所以會２４小時持續監視周圍的狀況。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "精神力量"
		},

		effect: {
			'zh-tw': "將2個傷害指示物以任意方式放置於對手的寶可夢身上。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "擺尾指令"
		},

		effect: {
			'zh-tw': "若希望，令對手將對手自己的手牌全部放回牌庫並重洗。這個情況下，對手從牌庫抽出4張卡。"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card