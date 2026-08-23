import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "金鱼王",
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "角金鱼",
	},
	description: {
		'zh-cn': "金鱼王之所以会用角挖穿河底的岩石来筑巢，是为了防止产下的卵被水流冲走。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "随心游动" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则在下一个对手的回合，这只宝可梦不受到招式的伤害和效果影响。" },
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "水流角击" },
			effect: { 'zh-cn': "追加造成这只宝可梦身上附着的【水】能量数量×30伤害。" },
			damage: "60+",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [119],
}

export default card
