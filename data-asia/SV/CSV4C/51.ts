import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "月石"
	},
	illustrator: "Tetsu Kayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [337],
	hp: 90,
	types: ["Psychic"],
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "新月"
			},
			effect: {
				'zh-cn': "如果自己场上有「太阳岩」的话则能生效。只要这只宝可梦在场上，自己所有的宝可梦，不会受到竞技场的效果影响。"
			},
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'zh-cn': "月之压制"
			},
			damage: "100",
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
