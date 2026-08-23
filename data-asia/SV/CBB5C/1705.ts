import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "勇士雄鹰",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "毛头小鹰",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "强行拖出" },
			effect: { 'zh-cn': "选择对手的1只备战宝可梦，将其与战斗宝可梦互换。然后，给新出场的宝可梦造成40伤害。" },
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "爆破疾风" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [628],
}

export default card
