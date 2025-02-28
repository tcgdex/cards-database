import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "エーフィ",
		id: "Espeon",
		th: "เอฟี",
		'zh-tw': "太陽伊布",
		'zh-cn': "太陽伊布"
	},

	illustrator: "Kariya",
	rarity: "None",
	category: "Pokemon",
	dexId: [196],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "相手の 動きを 予知するとき ふたまたに なっている 尻尾の 先は 微妙に 揺れている。",
		id: "Ujung ekor Espeon yang terbelah dua sedikit bergoyang ketika sedang membaca pergerakan lawan.",
		th: "ตอนทำนายการเคลื่อนไหวของศัตรู ปลายหางสองแฉกจะสั่นไหวเล็กน้อย",
		'zh-tw': "預知對手的行動時， 分叉的尾巴前端就會 微妙地擺動。",
		'zh-cn': "預知對手的行動時， 分叉的尾巴前端就會 微妙地擺動。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコダメージ",
			id: "Psychodamage",
			th: "ไซโคแดเมจ",
			'zh-tw': "精神傷害",
			'zh-cn': "精神傷害"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan.",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'zh-cn': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ねんりき",
			id: "Psikokinesis",
			th: "จิตตานุภาพ",
			'zh-tw': "念力",
			'zh-cn': "念力"
		},

		damage: 60,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
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