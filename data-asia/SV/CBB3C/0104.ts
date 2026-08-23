import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "皮可西",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "皮皮",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "看我嘛" },
			effect: { 'zh-cn': "选择对手的1只备战宝可梦，将其与战斗宝可梦互换。" },
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: { 'zh-cn': "追加之月" },
			effect: { 'zh-cn': "如果因为这个招式的伤害，对手的宝可梦【昏厥】的话，则多拿取1张奖赏卡。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [36],
}

export default card
