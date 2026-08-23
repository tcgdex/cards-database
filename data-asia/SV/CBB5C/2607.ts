import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "电海燕",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "电击" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则令对手的战斗宝可梦陷入【麻痹】状态。" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [940],
}

export default card
