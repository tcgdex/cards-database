import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝甲賀忍蛙"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "如忍者般神出鬼沒。 以敏捷的動作戲弄對手， 再用水之手裡劍將其劈裂。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "隱藏牌"
		},

		effect: {
			'zh-tw': "在自己的回合，若從自己的手牌將1張能量卡丟棄，則可使用1次。從自己的牌庫抽出2張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "月光手裏劍"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的2個能量丟棄，對手的2隻寶可夢各受到90點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card