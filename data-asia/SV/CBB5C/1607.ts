import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "泥巴鱼",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: { 'zh-cn': "劈啪麻痹" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则令对手的战斗宝可梦陷入【麻痹】状态。另外，选择那只宝可梦身上附着的1个能量，放于弃牌区。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [618],
}

export default card
