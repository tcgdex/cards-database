import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "皮皮",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	description: {
		'zh-cn': "因可爱的举止和叫声而广受欢迎的宝可梦。不过很少被人发现。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "赏月邀请" },
			effect: { 'zh-cn': "选择自己牌库中最多3张「皮皮」，放于备战区。并重洗牌库。" },
		},
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "掌击" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [35],
}

export default card
