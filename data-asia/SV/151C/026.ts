import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "雷丘",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "皮卡丘",
	},
	description: {
		'zh-cn': "尾巴会发挥接地线的作用把电导入地面，因此自己不会被电到。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "引雷" },
			effect: { 'zh-cn': "每当自己的宝可梦，受到对手宝可梦的招式的伤害而【昏厥】时，可使用1次。选择【昏厥】了的宝可梦身上附着的1张【雷】能量，转附于这只宝可梦身上。" },
		},
	],
	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: { 'zh-cn': "打雷" },
			effect: { 'zh-cn': "给这只宝可梦也造成50伤害。" },
			damage: 180,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [26],
}

export default card
