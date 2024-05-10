import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ジグザグマ",
		'zh-tw': "蛇紋熊"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [263],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "好奇心 旺盛な ポケモン。 なににでも 興味を 持つので いつも ジグザグに 歩いている。",
		'zh-tw': "好奇心旺盛的寶可夢。不論對什麼都很感興趣，所以總是呈鋸齒形行走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "とびだしヘッド",
			'zh-tw': "魯莽頭擊"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメできりさく",
			'zh-tw': "利爪劈擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card