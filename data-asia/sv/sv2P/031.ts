import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴチム",
		'zh-tw': "哥德寶寶",
		th: "โกธิมู",
		id: "Gothita"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [574],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "いつもは とっても 無邪気。 見えない なにかを 見ているときは 瞬きも せずに ずっと 無言。",
		'zh-tw': "總是一副天真無邪的樣子。看見肉眼看不見的東西時， 就會眼都不眨地一語不發。",
		th: "ปกติดูไร้เดียงสามาก ตอนที่มองดูอะไรที่มองไม่เห็นอยู่จะนิ่งเงียบ ไม่แม้แต่จะกะพริบตา",
		id: "Biasanya Gothita bertingkah sangat polos. Pokémon ini akan terus diam tanpa berkedip saat melihat sesuatu yang tak kasat mata."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はたく",
			'zh-tw': "拍擊",
			th: "ปัด",
			id: "Tumbuk"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ぶきみなねんぱ",
			'zh-tw': "不祥波動",
			th: "คลื่นแปลกประหลาด",
			id: "Telepati Menyeramkan"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
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

	retreat: 1,
	regulationMark: "G"
}

export default card