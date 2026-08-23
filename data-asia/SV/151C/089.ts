import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "臭臭泥",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "臭泥",
	},
	description: {
		'zh-cn': "全身上下沾满污泥。光是碰到它的足迹都会遭到毒素的侵袭。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "黏黏牢笼" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，使用招式所需能量和【撤退】所需能量，各增加1个【无】能量。" },
			damage: 30,
		},
		{
			cost: ["Darkness", "Darkness", "Darkness", "Colorless"],
			name: { 'zh-cn': "污泥炸弹" },
			damage: 180,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [89],
}

export default card
