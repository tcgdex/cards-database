import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ルンパッパ",
		'zh-tw': "樂天河童",
		'zh-cn': "樂天河童"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [272],
	hp: 140,
	types: ["Water"],

	description: {
		ja: "陽気な リズムの 音波を 受けると エネルギーを 作りだす 仕組みを 全身に 持っている。",
		'zh-tw': "全身都有著獨特的結構， 讓牠一接收歡樂節奏的 音波就會製造出能量。",
		'zh-cn': "全身都有著獨特的結構， 讓牠一接收歡樂節奏的 音波就會製造出能量。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "バイタルサンバ",
			'zh-tw': "生機森巴",
			'zh-cn': "生機森巴"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の場のポケモン全員の最大HPは、それぞれ「＋40」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			'zh-tw': "只要這隻寶可夢在場上，自己場上所有寶可夢的最大HP各「+40」。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			'zh-cn': "只要這隻寶可夢在場上，自己場上所有寶可夢的最大HP各「+40」。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "ハイドロスプラッシュ",
			'zh-tw': "水炮濺射",
			'zh-cn': "水炮濺射"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card