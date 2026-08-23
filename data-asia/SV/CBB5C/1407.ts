import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "搬运小匠",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "全力重拳" },
			effect: { 'zh-cn': "抛掷1次硬币如果为反面，则这个招式失败。" },
			damage: 40,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [532],
}

export default card
