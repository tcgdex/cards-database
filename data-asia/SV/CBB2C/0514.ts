import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "太阳伊布VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "太阳伊布V",
	},
	stage: "VMAX",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "太阳启示" },
			effect: { 'zh-cn': "只要这只宝可梦在场上，身上附有能量的自己所有的宝可梦，不受到对手宝可梦使用的招式的效果影响。（已经受到的效果，不会消失。）" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { 'zh-cn': "极巨超能" },
			effect: { 'zh-cn': "造成对手场上宝可梦身上附有的能量数量×60点伤害。" },
			damage: "60×",
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [196],
}

export default card
