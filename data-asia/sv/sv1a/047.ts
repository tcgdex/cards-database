import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "マクノシタ",
		'zh-tw': "幕下力士"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [296],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "厳しい 稽古を 繰り返して 強くなる。 どんな 攻撃にも 耐える 根性の ポケモン。",
		'zh-tw': "會在不斷的嚴格訓練中逐漸變強。能夠承受任何攻擊， 是很有毅力的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はりて",
			'zh-tw': "巴掌撲擊"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card