import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "黑鲁加ex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "戴鲁比",
	},
	stage: "Stage1",
	suffix: "ex",
	attacks: [
		{
			cost: ["Darkness", "Darkness"],
			name: { 'zh-cn': "邪恶爪" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的【基础】宝可梦，无法使用招式。" },
			damage: 90,
		},
		{
			cost: ["Darkness", "Darkness", "Darkness"],
			name: { 'zh-cn': "猎犬獠牙" },
			effect: { 'zh-cn': "给这只宝可梦也造成30伤害。" },
			damage: 220,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [229],
}

export default card
