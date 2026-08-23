import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "月亮伊布VMAX",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "月亮伊布V",
	},
	stage: "VMAX",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "黑暗信号" },
			effect: { 'zh-cn': "在自己的回合，当将这张卡牌从手牌使出并进行进化时，可使用1次。选择对手的1只备战宝可梦，将其与战斗宝可梦互换。" },
		},
	],
	attacks: [
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: { 'zh-cn': "极巨恶霸" },
			damage: 160,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [197],
}

export default card
