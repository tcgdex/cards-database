import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "カプサイジ",
		'zh-tw': "熱辣娃"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [951],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びるほど 体内で 辛み成分が 増えて 技が どんどん 辛くなるのだ。",
		'zh-tw': "沐浴在太陽下越久，體內的辣味成分就會增加得越多， 招式也會變得越來越辣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "にどずつき",
			'zh-tw': "二連頭錘"
		},

		damage: "50×",

		effect: {
			ja: "コインを2回投げ、オモテの数×50ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card