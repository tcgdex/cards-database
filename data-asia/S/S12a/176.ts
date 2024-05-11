import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花舞鳥",
		ja: "オドリドリ"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "吸食了朱紅色花蜜的花舞鳥。訓練家如果做出了錯誤的指示，感情起伏激烈的牠就會非常生氣。",
		ja: "くれないのミツを 吸った オドリドリ。 トレーナーが 指示を 間違えると 激しく 怒る 激情家 だ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "熱血練習",
			ja: "ねっけつレッスン"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有「匯流」寶可夢，受到對手的寶可夢招式的傷害「-20」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			ja: "このポケモンがいるかぎり、自分の「フュージョン」のポケモン全員が、相手のポケモンから受けるワザのダメージは「-20」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "熱情水滴",
			ja: "じょうねつのしずく"
		},

		effect: {
			'zh-tw': "將5個傷害指示物以任意方式放置於對手的寶可夢身上。",
			ja: "ダメカン5個を、相手のポケモンに好きなようにのせる。"
		},

		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [741]
}

export default card