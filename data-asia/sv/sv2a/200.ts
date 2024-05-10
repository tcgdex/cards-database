import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギバナex",
		'zh-tw': "妙蛙花ex",
		th: "ฟุชิกิบานะex",
		id: "Venusaur ex"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "やすらぎのはな",
			'zh-tw': "平和之花",
			th: "ดอกไม้สงบใจ",
			id: "Bunga Ketenangan"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分のポケモン1匹のHPを「60」回復する。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。將自己的1隻寶可夢恢復「60」HP。",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [60]",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Pulihkan HP 1 Pokémon sendiri sejumlah 60."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "もうどくウィップ",
			'zh-tw': "劇毒鞭打",
			th: "แส้พิษร้ายแรง",
			id: "Cambuk Racun Ekstrem"
		},

		damage: 150,

		effect: {
			ja: "相手のバトルポケモンをどくとこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun dan Pusing."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card