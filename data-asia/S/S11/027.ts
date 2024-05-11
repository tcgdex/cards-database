import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "螢光魚"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "會用發光的尾鰭引誘獵物。白天會待在海面附近， 到了夜裡就會向深海移動。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "海之伴奏"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【水】能量卡，附於自己的場上持有「隨興游水」招式的寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card