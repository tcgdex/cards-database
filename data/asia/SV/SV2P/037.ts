import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ベラカス",
		'zh-tw': "蟲甲聖",
		'th-th': "เบราคาสุ",
		'id-id': "Rabsca"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [954],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "玉を 支える 体は ほとんど 動かないため 本体は 玉の中にいると 考えられている。",
		'zh-tw': "支撐球的身體幾乎不動，因此人們認為牠的本體 其實是在球裡面。",
		'th-th': "เนื่องจากร่างกายที่แบกรับลูกบอลนั้นแทบจะไม่ขยับเลย จึงเชื่อกันว่าร่างหลักของมันอยู่ภายในลูกบอล",
		'id-id': "Karena tubuh yang menyokong bolanya hampir tidak pernah bergerak, diduga tubuh asli Rabsca berada di dalam bolanya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "さいきのいのり",
			'zh-tw': "復生祈禱",
			'th-th': "พรแห่งการฟื้นคืน",
			'id-id': "Doa Kebangkitan"
		},

		effect: {
			'ja-jp': "自分のトラッシュからポケモンを1枚選び、ベンチに出す。",
			'zh-tw': "從自己的棄牌區選擇1張寶可夢卡，放置於備戰區。",
			'th-th': "เลือกการ์ดโปเกมอน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา วางบนเบนช์",
			'id-id': "Pilih 1 lembar Pokémon dari Trash sendiri, lalu masukkan ke Cadangan."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'ja-jp': "サイケこうせん",
			'zh-tw': "幻象光線",
			'th-th': "ลำแสงพลังจิต",
			'id-id': "Sinar Psikedelik"
		},

		damage: 50,

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
			type: "holo",
			thirdParty: {
				cardmarket: 705270,
				tcgplayer: 567794,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card