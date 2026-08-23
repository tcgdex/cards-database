import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "哥达鸭",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "可达鸭",
	},
	description: {
		'zh-cn': "当它靠着带有蹼的修长手脚全力游泳时，不知为何额头会闪闪发光。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "水难救助" },
			effect: { 'zh-cn': "选择自己弃牌区中最多4张宝可梦，在给对手看过之后，加入手牌。" },
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: { 'zh-cn': "超级飞溅" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [55],
}

export default card
