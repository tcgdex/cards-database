import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花舞鳥"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "吸食了朱紅色花蜜的花舞鳥。訓練家如果做出了錯誤的指示，感情起伏激烈的牠就會非常生氣。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "熱血練習"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有「匯流」寶可夢，受到對手的寶可夢招式的傷害「-20」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "熱情水滴"
		},

		effect: {
			'zh-tw': "將5個傷害指示物以任意方式放置於對手的寶可夢身上。"
		},

		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card