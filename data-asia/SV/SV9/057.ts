import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "マタドガス",
		'zh-tw': "雙彈瓦斯",
		'zh-cn': "雙彈瓦斯"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [110],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "体内に 含まれる 毒ガスを ぎりぎりまで 薄めると 最高級の 香水ができる。",
		'zh-tw': "若將牠體內所含的 毒瓦斯稀釋到極限， 就能做出最高級的香水。",
		'zh-cn': "若將牠體內所含的 毒瓦斯稀釋到極限， 就能做出最高級的香水。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "じゅうまんガス",
			'zh-tw': "充滿瓦斯",
			'zh-cn': "充滿瓦斯"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "クレイジーボム",
			'zh-tw': "瘋狂炸彈",
			'zh-cn': "瘋狂炸彈"
		},

		damage: "50+",

		effect: {
			ja: "前の自分の番に、このポケモンが「じゅうまんガス」を使っていたなら、120ダメージ追加。",
			'zh-tw': "在上個自己的回合，若這隻寶可夢使出了「充滿瓦斯」，則增加120點傷害。",
			'zh-cn': "在上個自己的回合，若這隻寶可夢使出了「充滿瓦斯」，則增加120點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card