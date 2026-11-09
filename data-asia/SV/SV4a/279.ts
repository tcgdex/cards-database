import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス",
		'zh-tw': "帕底亞 肯泰羅",
		id: "Paldean Tauros"
	},

	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "ぶ厚く 力強い 筋肉と 気性の 荒さが 特徴。 コンバット種と 呼ばれる。",
		'zh-tw': "特徵是厚實有力的肌肉，以及粗魯暴躁的性格。 這種樣子被稱為鬥戰種。",
		id: "Otot tebal bertenaga dan sifatnya yang kasar adalah karakteristiknya. Pokémon ini dikenal sebagai Tauros Varian Tempur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "いかりのつの",
			'zh-tw': "憤怒之角",
			id: "Tanduk Kemarahan"
		},

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "コンバットタックル",
			'zh-tw': "鬥戰衝撞",
			id: "Combat Tackle"
		},

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			id: "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747633,
				tcgplayer: 567680,
				cardtrader: 270236,
			},
		},
	]
}

export default card