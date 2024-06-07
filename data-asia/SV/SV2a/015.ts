import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "スピアー",
		'zh-tw': "大針蜂",
		th: "สเปียร์",
		id: "Beedrill"
	},

	illustrator: "nisimono",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [15],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "集団で 現れることもある。 猛スピードで 飛び回り お尻の 毒針で 刺しまくる。",
		'zh-tw': "有時會成群結隊地出現。 能以極快的速度飛來飛去， 並用尾部的毒針不斷刺擊對手。",
		th: "บางครั้งจะปรากฏตัวกันเป็นฝูง บินวนไปมาด้วยความเร็วสูงและทิ่มแทงเข็มพิษจากก้นไปทั่ว",
		id: "Kadang Beedrill muncul secara berkelompok. Pokémon ini terbang berkeliling dengan kecepatan tinggi dan terus-menerus menusuk dengan jarum beracun di bagian bawah tubuhnya."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぎゃっきょうニードル",
			'zh-tw': "逆境尖刺",
			th: "เข็มแห่งภัยพิบัติ",
			id: "Jarum Kemalangan"
		},

		damage: "30+",

		effect: {
			ja: "自分の手札が1枚もないなら、120ダメージ追加し、相手のバトルポケモンをどくとマヒにする。",
			'zh-tw': "若自己1張手牌都沒有，則增加120點傷害，並將對手的戰鬥寶可夢【中毒】與【麻痺】。",
			th: "ถ้าบนมือฝ่ายเราไม่มีการ์ดเลยแม้แต่ 1 ใบ การโจมตีนี้จะเพิ่มแดเมจอีก 120 ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[ชา]",
			id: "Jika Kartu Pegangan sendiri tidak tersisa 1 lembar pun, kerusakan yang diberikan bertambah sejumlah 120, lalu ubah kondisi Pokémon Bertarung lawan menjadi Racun dan Lumpuh."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "つきさす",
			'zh-tw': "突刺",
			th: "แทง",
			id: "Melubangi"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card