import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴雪王"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "會引發暴風雪的寶可夢。只要牠搖動巨大的身體， 周圍立刻會變得一片雪白。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "堅韌提升"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的場上的所有「一擊」寶可夢（「暴雪王」除外）的最大HP各增加「50」。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "百萬噸重拳"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card