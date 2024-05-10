import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "クスネ",
		'zh-tw': "偷兒狐"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [827],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "用心深く ずる賢い。 エサを 盗むと しっぽで 足跡を 消しながら 逃げるのだ。",
		'zh-tw': "性情謹慎且狡猾。在偷盜食物逃走的時候 會用尾巴擦掉自己的足跡。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふいをつく",
			'zh-tw': "偷襲"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card