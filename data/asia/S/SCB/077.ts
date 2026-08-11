import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "師父鼬"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "當牠用奇妙聲音發出叫喊時是很危險的，由快到無法看清的踢腿和手刀組成的連續攻擊將接踵而來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拍擊"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "旋轉鞭打"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。"
		},

		damage: 90,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card