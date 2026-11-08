import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イーユイex",
		'zh-tw': "古玉魚ex",
		'th-th': "อวี้อวี๋ex",
		'id-id': "Chi-Yu ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "ねたみこがす",
			'zh-tw': "嫉妒灼燒",
			'th-th': "เผาด้วยความอิจฉา",
			'id-id': "Kedengkian Menghanguskan"
		},

		effect: {
			'ja-jp': "相手の山札を上から2枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方2張卡丟棄。",
			'th-th': "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang 2 kartu dari atas Deck lawan ke Trash."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "フレイムサージ",
			'zh-tw': "火焰巨浪",
			'th-th': "คลื่นเพลิง",
			'id-id': "Flame Surge"
		},

		damage: 100,

		effect: {
			'ja-jp': "自分のベンチポケモンを3匹まで選び、山札から「基本エネルギー」を1枚ずつつける。そして山札を切る。",
			'zh-tw': "選擇最多3隻自己的備戰寶可夢，從牌庫附給那些寶可夢各1張「基本【火】能量」卡。並且重洗牌庫。",
			'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายเราได้สูงสุด 3 ตัว นำการ์ด [พลังงานพื้นฐาน[ไฟ]] จากสำรับการ์ดมาติดตัวละ 1 ใบ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 3 Pokémon Cadangan sendiri, lalu kenakan Energi Dasar {Api} masing-masing 1 lembar dari Deck pada Pokémon tersebut. Kemudian, kocok Deck."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746237,
				tcgplayer: 567396,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card