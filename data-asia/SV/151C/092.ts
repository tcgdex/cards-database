import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "鬼斯",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	description: {
		'zh-cn': "利用气体状的身体缠住猎物，从皮肤缓缓注入毒素，使猎物变得虚弱。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "瓦斯包围" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [92],
}

export default card
