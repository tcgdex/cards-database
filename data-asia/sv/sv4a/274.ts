import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ボチ",
		'zh-tw': "墓仔狗",
		id: "Greavard"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	dexId: [971],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "人懐っこくて 寂しがり。 ちょっと かまっただけでも いつまでも 後を ついてくるぞ。",
		'zh-tw': "愛親近人，害怕寂寞。就算只跟牠玩了一下下， 牠也會一直跟在後面。",
		id: "Sifat Greavard jinak dan mudah kesepian. Pokémon ini akan terus mengikutimu meskipun kamu hanya memberinya sedikit perhatian."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "おはかであそぶ",
			'zh-tw': "墓地遊玩",
			id: "Main di Kuburan"
		},

		damage: "10×",

		effect: {
			ja: "自分のトラッシュにあるポケモンの枚数×10ダメージ。",
			'zh-tw': "造成自己的棄牌區的【超】寶可夢卡的張數×10點傷害。",
			id: "Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lembar Pokémon {Psychic} yang ada di Trash sendiri."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card