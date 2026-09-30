import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "咚咚鼠ex"
	},
	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	set: Set,
	dexId: [702],
	hp: 170,
	types: ["Psychic"],
	suffix: "ex",
	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'zh-cn': "长尾互换"
			},
			effect: {
				'zh-cn': "选择自己的1只备战宝可梦，将被选择的宝可梦身上放置的所有伤害指示物，转放于对手的战斗宝可梦身上。"
			},
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				'zh-cn': "奇迹射击"
			},
			effect: {
				'zh-cn': "选择这只宝可梦身上附着的1个能量，放于弃牌区。"
			},
			damage: "170",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
