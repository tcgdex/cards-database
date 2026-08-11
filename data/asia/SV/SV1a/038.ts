import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "デデンネex",
		'zh-tw': "咚咚鼠ex",
		'th-th': "เดเด็นเนะex",
		'id-id': "Dedenne ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'ja-jp': "テールスワップ",
			'zh-tw': "長尾置換",
			'th-th': "หางสลับ",
			'id-id': "Tail Swap"
		},

		effect: {
			'ja-jp': "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			'zh-tw': "選擇1隻自己的備戰寶可夢，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。",
			'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว ย้ายตัวนับแดเมจที่วางอยู่บนโปเกมอนที่เลือกทั้งหมด ไปวางที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			'id-id': "Pilih 1 Pokémon Cadangan sendiri, lalu pindahkan semua Token Kerusakan yang dimiliki Pokémon yang telah dipilih ke Pokémon Bertarung lawan."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			'ja-jp': "ワンダーショット",
			'zh-tw': "奇跡射擊",
			'th-th': "วันเดอร์ช็อต",
			'id-id': "Wonder Shot"
		},

		damage: 170,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701092,
				tcgplayer: 568161,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card