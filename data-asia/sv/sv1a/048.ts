import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハリテヤマ",
		'zh-tw': "鐵掌力士"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [297],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "力くらべが 大好き。 走ってくる 列車を 張り手で 止めてしまう パワーを 持つ。",
		'zh-tw': "最喜歡和對手比力氣。擁有的力量足以一掌擋下 迎面馳來的列車。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "つっぱりげいこ",
			'zh-tw': "猛推演練"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-10」される。",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的寶可夢招式的傷害「-10」點。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ロケットはりて",
			'zh-tw': "火箭巴掌"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card