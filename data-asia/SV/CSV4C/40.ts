import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "光蚪仔"
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [938],
	hp: 50,
	types: ["Lightning"],
	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'zh-cn': "带电"
			},
			effect: {
				'zh-cn': "选择自己弃牌区中的1张「基本【雷】能量」，附着于这只宝可梦身上。"
			},
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				'zh-cn': "光亮弹"
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
