import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "妙蛙花ex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "妙蛙草",
	},
	stage: "Stage2",
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "安抚之花" },
			effect: { 'zh-cn': "如果这只宝可梦在战斗场上的话，则在自己的回合可以使用1次。回复自己1只宝可梦「60」HP。" },
		},
	],
	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: { 'zh-cn': "剧毒鞭打" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【中毒】和【混乱】状态。" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 4,
	regulationMark: "G",
	rarity: "Ultra Rare",
	dexId: [3],
}

export default card
