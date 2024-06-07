import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓鼬探長",
		th: "เดคากูส",
		ja: "デカグース"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "忍耐力非常強，然而只要看見自己愛吃的小拉達， 就會立刻忘我地撲上去。",
		th: "มีความอดทนสูงแต่พอเจอโครัตตาที่เป็นของโปรด ก็จะกระโดดเข้าใส่อย่างลืมตัว",
		ja: "とても 我慢強い 性質だが 好物の コラッタを 見つけると 我を 忘れて 飛びかかるぞ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "監視頭擊",
			th: "หัวหน้าเฝ้ายาม",
			ja: "はりこみヘッド"
		},

		effect: {
			'zh-tw': "在上個對手的回合，若對手的戰鬥寶可夢從備戰區放置於戰鬥場，則增加120點傷害。",
			th: "ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามออกจากเบนช์มาที่ตำแหน่งต่อสู้ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			ja: "前の相手の番に、相手のバトルポケモンが、ベンチからバトル場に出ていたなら、120ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "撞倒",
			th: "พุ่งชน",
			ja: "つきたおし"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [735]
}

export default card