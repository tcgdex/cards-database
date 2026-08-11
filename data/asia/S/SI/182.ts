import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "克雷色利亞"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "新月生長"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【超】能量卡，附於自己的寶可夢身上。並且重洗牌庫。若在後攻玩家的最初回合使用，則可附上的張數改為最多3張，附於自己的1隻寶可夢身上。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "光子鐳射"
		},

		effect: {
			'zh-tw': "若自己的場上的能量有5個以上，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Psychic", "Psychic"]
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
	regulationMark: "E"
}

export default card