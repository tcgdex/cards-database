import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "海刺龙",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "墨海马",
	},
	description: {
		'zh-cn': "嘴巴虽然细，吸引力却很强。就算是比嘴巴还大的猎物，也能一瞬间吸进嘴里吃掉。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "致盲墨汁" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦在使用招式时，对手将抛掷2次硬币。只要出现1次反面，那么那个招式失败。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [117],
}

export default card
