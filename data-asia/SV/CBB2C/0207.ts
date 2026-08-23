import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "水伊布",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "水隐" },
			effect: { 'zh-cn': "只要这只宝可梦，处于备战区，就不会受到招式的伤害。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "水炮" },
			effect: { 'zh-cn': "追加造成这只宝可梦身上附有的【水】能量数量×20点伤害。" },
			damage: "60+",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "D",
	rarity: "Uncommon",
	dexId: [134],
}

export default card
