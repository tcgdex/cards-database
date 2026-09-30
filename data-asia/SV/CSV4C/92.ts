import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "快龙ex"
	},
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	set: Set,
	dexId: [149],
	hp: 330,
	types: ["Dragon"],
	suffix: "ex",
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "翅膀攻击"
			},
			damage: "70",
		},
		{
			cost: ["Water", "Lightning"],
			name: {
				'zh-cn': "流星破坏"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则追加造成140伤害。如果为反面，则在下一个自己的回合，这只宝可梦无法使用招式。"
			},
			damage: "140+",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
