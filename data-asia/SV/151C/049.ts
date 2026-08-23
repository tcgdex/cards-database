import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "摩鲁蛾",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "毛球",
	},
	description: {
		'zh-cn': "翅膀上附着着鳞粉，每次翩翩扇动翅膀，就会播撒剧毒的粉末。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "错乱粉末" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【混乱】状态。在下一个对手的回合，对手无法从手牌使出物品。" },
			damage: 30,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "高速之翼" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [49],
}

export default card
