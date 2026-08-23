import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "溶食兽",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "口水" },
			damage: 10,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: { 'zh-cn': "毒液气息" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【中毒】状态。" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [316],
}

export default card
