import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パオジアン",
		'id-id': "Chien-Pao",
		'th-th': "เป้าเจี้ยน",
		'zh-tw': "古劍豹",
		'zh-cn': "古劍豹"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	dexId: [1002],
	hp: 120,
	types: ["Water"],

	description: {
		'ja-jp': "大昔に 剣によって 露と消えた 者たちの 憎しみが 雪を まとい ポケモンになった。",
		'id-id': "Chien-Pao adalah kebencian orang-orang yang meninggal oleh pedang pada zaman dahulu. Ia menyelimuti dirinya dengan salju, lalu berubah menjadi Pokémon.",
		'th-th': "ความชิงชังของผู้ที่ลาโลกไปด้วยคมดาบเมื่อนานมาแล้วถูกห่อหุ้มด้วยหิมะ จนกลายเป็นโปเกมอน",
		'zh-tw': "遙遠過去喪命於劍下者 的憎恨之情纏繞在雪上， 變成了寶可夢。",
		'zh-cn': "遙遠過去喪命於劍下者 的憎恨之情纏繞在雪上， 變成了寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "スノーブリング",
			'id-id': "Snow Bring",
			'th-th': "เบิกหิมะ",
			'zh-tw': "雪之到來",
			'zh-cn': "雪之到來"
		},

		effect: {
			'ja-jp': "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。",
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar {Air} dari Trash sendiri, lalu kenakan pada 1 Pokémon sendiri.",
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา 1 ตัว",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【水】能量」卡，附於自己的1隻寶可夢身上。",
			'zh-cn': "從自己的棄牌區選擇最多2張「基本【水】能量」卡，附於自己的1隻寶可夢身上。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'ja-jp': "ラースブレード",
			'id-id': "Wrath Blade",
			'th-th': "ดาบโกรธเกรี้ยว",
			'zh-tw': "氣忿利刃",
			'zh-cn': "氣忿利刃"
		},

		damage: 130,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'id-id': "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803161,
				tcgplayer: 602401,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604537,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602402,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card