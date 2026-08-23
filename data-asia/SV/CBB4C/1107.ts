import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大朝北鼻",
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "朝北鼻",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "突袭镭射" },
			effect: { 'zh-cn': "如果对手的战斗宝可梦身上放有「宝可梦道具」的话，则追加造成80伤害。" },
			damage: "80+",
		},
		{
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "大地粉碎" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [476],
}

export default card
