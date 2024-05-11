import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "七夕青鳥"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "會用優美高音歌唱的寶可夢。能用雲朵般的翅膀，藉上升氣流之力飛向天空。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "奇跡守護"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【V】・【GX】」招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高速飛行"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card