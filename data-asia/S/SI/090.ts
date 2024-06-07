import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "章魚桶"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "有著堅硬結實的腦袋。 會用帶有吸盤的腳纏住對手， 然後不停地用頭猛撞。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "連擊搜索"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張「連擊」卡，在給對手看過後加入手牌。並且重洗牌庫。在這個回合，若已經使出了其他的「連擊搜索」，則這個特性無法使用。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "攀瀑"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card