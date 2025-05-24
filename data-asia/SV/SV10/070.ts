import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>雙彈瓦斯",
		'zh-cn': "<火箭隊的>雙彈瓦斯",
		ja: "ロケット団のマタドガス"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "若將牠體內所含的 毒瓦斯稀釋到極限， 就能做出最高級的香水。",
		'zh-cn': "若將牠體內所含的 毒瓦斯稀釋到極限， 就能做出最高級的香水。",
		ja: "体内に 含まれる 毒ガスを ぎりぎりまで 薄めると 最高級の 香水ができる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "一併爆炸",
			'zh-cn': "一併爆炸",
			ja: "いっせいばくはつ"
		},

		effect: {
			'zh-tw': "造成雙方的場上的，名稱中有「瓦斯彈」或者「雙彈瓦斯」的寶可夢的數量×40點傷害。",
			'zh-cn': "造成雙方的場上的，名稱中有「瓦斯彈」或者「雙彈瓦斯」的寶可夢的數量×40點傷害。",
			ja: "おたがいの場の、名前に「ドガース」または「マタドガス」とつくポケモンの数×40ダメージ。"
		},

		damage: "40×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [110]
}

export default card