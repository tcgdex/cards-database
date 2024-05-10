import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "エーフィ",
		'zh-tw': "太陽伊布",
		th: "เอฟี"
	},

	illustrator: "Cona Nitanda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [196],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "相手の 動きを 予知するとき ふたまたに なっている 尻尾の 先は 微妙に 揺れている。",
		'zh-tw': "預知對手的行動時，分叉的尾巴前端就會微妙地擺動。",
		th: "ตอนทำนายการเคลื่อนไหวของศัตรู ปลายหางสองแฉกจะสั่นไหวเล็กน้อย"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコダメージ",
			'zh-tw': "精神傷害",
			th: "ไซโคแดเมจ"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ねんりき",
			'zh-tw': "念力",
			th: "จิตตานุภาพ"
		},

		damage: 60,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
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