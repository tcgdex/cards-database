import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酷豹V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "隱藏爪"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。選擇1張雙方的場上寶可夢身上附加的「寶可夢道具」卡，將其丟棄。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暗影拆裂"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與附加的卡，全部放回手牌。"
		},

		damage: 110,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card