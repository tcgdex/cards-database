import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "水伊布VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "水伊布V",
	},
	stage: "VMAX",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "泡沫舱" },
			effect: { 'zh-cn': "选择自己弃牌区中的1张【水】宝可梦，放于备战区。然后，选择自己弃牌区中最多3张【水】能量，附着于该宝可梦身上。" },
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "极巨激流" },
			effect: { 'zh-cn': "如果对手的战斗宝可梦身上放置有伤害指示物的话，则追加造成100点伤害。" },
			damage: "100+",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [134],
}

export default card
