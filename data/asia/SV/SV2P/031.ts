import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゴチム",
		'zh-tw': "哥德寶寶",
		'th-th': "โกธิมู",
		'id-id': "Gothita"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [574],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "いつもは とっても 無邪気。 見えない なにかを 見ているときは 瞬きも せずに ずっと 無言。",
		'zh-tw': "總是一副天真無邪的樣子。看見肉眼看不見的東西時， 就會眼都不眨地一語不發。",
		'th-th': "ปกติดูไร้เดียงสามาก ตอนที่มองดูอะไรที่มองไม่เห็นอยู่จะนิ่งเงียบ ไม่แม้แต่จะกะพริบตา",
		'id-id': "Biasanya Gothita bertingkah sangat polos. Pokémon ini akan terus diam tanpa berkedip saat melihat sesuatu yang tak kasat mata."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "はたく",
			'zh-tw': "拍擊",
			'th-th': "ปัด",
			'id-id': "Tumbuk"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "ぶきみなねんぱ",
			'zh-tw': "不祥波動",
			'th-th': "คลื่นแปลกประหลาด",
			'id-id': "Telepati Menyeramkan"
		},

		damage: 20,

		effect: {
			'ja-jp': "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705264,
				tcgplayer: 567788,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card