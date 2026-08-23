import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "卡拉卡拉",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	description: {
		'zh-cn': "它头上戴着死去母亲的头骨。虽然也会因悲伤的梦境而哭泣，但每流一次泪，都会变得更加坚强。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "声援之骨" },
			effect: { 'zh-cn': "只要这只宝可梦在备战区，自己的「嘎啦嘎啦」所使用的招式，给对手的战斗宝可梦造成的伤害「+30」。" },
		},
	],
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "二连敲" },
			effect: { 'zh-cn': "抛掷2次硬币，造成正面次数×10伤害。" },
			damage: "10×",
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [104],
}

export default card
