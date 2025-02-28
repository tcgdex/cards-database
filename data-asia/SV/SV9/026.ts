import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ナンジャモのビリリダマ",
		'zh-tw': "奇樹的霹靂電球",
		'zh-cn': "奇樹的霹靂電球"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Common",
	category: "Pokemon",
	dexId: [100],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "転がって 移動するので 地面が デコボコだと ショックで 爆発してしまう。",
		'zh-tw': "靠著翻滾身體來移動， 如果地面凹凸不平， 就會受到衝擊而爆炸。",
		'zh-cn': "靠著翻滾身體來移動， 如果地面凹凸不平， 就會受到衝擊而爆炸。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "チェインボルト",
			'zh-tw': "連鎖伏特",
			'zh-cn': "連鎖伏特"
		},

		damage: "20+",

		effect: {
			ja: "自分の「ナンジャモのポケモン」全員についているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加自己的所有「奇樹的寶可夢」身上附加的【雷】能量的數量×20點傷害。",
			'zh-cn': "增加自己的所有「奇樹的寶可夢」身上附加的【雷】能量的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card