import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "裹蜜虫",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "啃果虫",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "祭典乐舞" },
			effect: { 'zh-cn': "如果场上有「祭典会场」的话，则这只宝可梦，可以连续使用2次拥有的招式。（如果第1次的招式令对手的战斗宝可梦【昏厥】的话，则在下一只对手的宝可梦被放于战斗场后，继续使用第2次招式。）" },
		},
	],
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "朋友环" },
			effect: { 'zh-cn': "造成自己备战宝可梦数量×20伤害。" },
			damage: "20×",
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1011],
}

export default card
