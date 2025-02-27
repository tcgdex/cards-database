import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブラッキーex",
		id: "Umbreon ex",
		th: "แบล็กกีex",
		'zh-tw': "月亮伊布ex",
		'zh-cn': "月亮伊布ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ムーンミラージュ",
			id: "Moon Mirage",
			th: "มูนมิราจ",
			'zh-tw': "月亮幻想",
			'zh-cn': "月亮幻想"
		},

		damage: 160,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。"
		}
	}, {
		cost: ["Lightning", "Psychic", "Darkness"],

		name: {
			ja: "オニキス",
			id: "Onyx",
			th: "โอนิกซ์",
			'zh-tw': "縞瑪瑙",
			'zh-cn': "縞瑪瑙"
		},

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、自分のサイドを1枚とる。",
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash, lalu ambil 1 lembar Kartu Point sendiri.",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด หยิบการ์ดรางวัล ฝ่ายเรา 1 ใบ",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄，獲得1張自己的獎賞卡。",
			'zh-cn': "將這隻寶可夢身上附加的能量卡全部丟棄，獲得1張自己的獎賞卡。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card