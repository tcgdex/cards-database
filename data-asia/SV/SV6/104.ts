import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪妖女"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "據說會吐出零下５０度的 氣息凍結獵物，然後帶到 秘密的地方裝飾起來。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "冰冷之帳"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，每次寶可夢檢查時，在雙方的擁有特性的所有寶可夢（「雪妖女」除外）身上各放置1個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "冰霜粉碎"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card