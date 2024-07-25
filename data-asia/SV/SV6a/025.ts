import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "月月熊 赫月"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "會用堅硬如鐵的泥巴保護身體， 且擁有能夠看穿黑暗的左眼。 是特別的月月熊。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "經驗法則"
		},

		effect: {
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張「基本【鬥】能量」卡，附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "瘋狂啃咬"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×30點傷害。"
		},

		damage: "100+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H",
	rarity: "Rare"
}

export default card