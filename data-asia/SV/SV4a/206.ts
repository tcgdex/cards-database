import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ノノクラゲ",
		'zh-tw': "原野水母",
		id: "Toedscool"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	dexId: [948],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "メノクラゲに 似ているが まったく 別の 種類。 脚は 細いが 走りだせば 時速５０キロになる。",
		'zh-tw': "看起來像瑪瑙水母，其實是截然不同的種類。雖然腳很細， 但跑起來能達到時速５０公里。",
		id: "Meskipun mirip dengan Tentacool, Pokémon ini merupakan spesies yang berbeda. Kakinya ramping, tetapi kecepatan lari Toedscool dapat mencapai 50 km/jam."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "みだれげり",
			'zh-tw': "亂踢",
			id: "Tendangan Tidak Teratur"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card