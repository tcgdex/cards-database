import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "幼基拉斯"
	},
	illustrator: "Haru Akasaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [246],
	hp: 70,
	types: ["Fighting"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "二连突刺"
			},
			effect: {
				'zh-cn': "抛掷2次硬币，造成正面次数×10伤害。"
			},
			damage: "10×",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
