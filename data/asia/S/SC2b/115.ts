import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "姆克兒"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'zh-tw': "為了獵捕蟲寶可夢，以龐大的群體在山野間飛來飛去。叫聲非常吵鬧。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "天空雜耍"
		},

		effect: {
			'zh-tw': "在這個回合，若從自己的手牌使出了「養鳥人」，則這隻寶可夢使用招式所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "銳利目光"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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
