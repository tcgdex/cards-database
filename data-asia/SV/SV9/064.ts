import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのギアル",
		'zh-tw': "N的齒輪兒",
		'zh-cn': "N的齒輪兒"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	dexId: [599],
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "２つの 体は 双子よりも 近い。 べつの 体同士だと いまいち うまく 噛み合わない。",
		'zh-tw': "２個身體比雙胞胎還要親近。 要是換成別的齒輪兒， 就沒有辦法好好咬合。",
		'zh-cn': "２個身體比雙胞胎還要親近。 要是換成別的齒輪兒， 就沒有辦法好好咬合。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルスピン",
			'zh-tw': "雙重旋轉",
			'zh-cn': "雙重旋轉"
		},

		damage: "10×",

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card