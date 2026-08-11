import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "青銅鐘",
		ja: "ドータクン"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'zh-tw': "牠身上的紋路讓許多學者認為牠原本並不存在於伽勒爾。",
		ja: "体の模様 から 本来 ガラルには いない ポケモンと 考える 学者も 多い。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "金屬轉移",
			ja: "メタルトランス"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上寶可夢身上附加的【鋼】能量，改附於自己的其他寶可夢身上。",
			ja: "自分の番に何回でも使える。自分の場のポケモンについているエネルギーを1個選び、自分の別のポケモンにつけ替える。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "意念頭錘",
			ja: "しねんのずつき"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3,
	regulationMark: "E",
	dexId: [437]
}

export default card