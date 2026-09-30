import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "怖纳噬草"
	},
	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [947],
	hp: 100,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Grass"],
			name: {
				'zh-cn': "生命吸取"
			},
			effect: {
				'zh-cn': "回复这只宝可梦「30」HP。"
			},
			damage: "30",
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "枯木牢狱"
			},
			effect: {
				'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，使用招式所需能量，增加2个【无】能量。"
			},
			damage: "80",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
