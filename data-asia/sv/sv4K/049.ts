import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤブクロン",
		'zh-tw': "破破袋"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [568],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "不衛生な 場所が 好き。 ゴミで 汚したまま 放っておくと 部屋にも 現れて 棲みつく。",
		'zh-tw': "喜歡不衛生的地方。如果不及時清理家裡的垃圾， 破破袋就會過來居住。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ガスでつつむ",
			'zh-tw': "瓦斯包圍"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムヒット",
			'zh-tw': "毒液一擊"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card