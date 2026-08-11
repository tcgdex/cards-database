import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゴチルゼル",
		'zh-tw': "哥德小姐",
		'th-th': "โกธิรูเซล",
		'id-id': "Gothitelle"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [576],
	hp: 150,
	types: ["Psychic"],

	description: {
		'ja-jp': "サイコパワーを 放ち 相手に 宇宙が 終わる 夢を 見せる。 それは 儚く 美しいらしい。",
		'zh-tw': "會釋放出精神力量，讓對手夢見宇宙終結的夢。 內容似乎既虛幻又美麗。",
		'th-th': "ใช้พลังจิตทำให้อีกฝ่ายฝันเห็นวันสิ้นสุดของจักรวาล เหมือนจะเป็นฝันแสนสั้นที่งดงาม",
		'id-id': "Gothitelle mengeluarkan kekuatan psikokinesis untuk memperlihatkan mimpi berakhirnya ruang angkasa. Kabarnya, mimpi tersebut tidak kekal dan indah."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ほしよみ",
			'zh-tw': "讀星",
			'th-th': "อ่านดวงดาว",
			'id-id': "Membaca Bintang"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。相手の山札を上から2枚見て、どちらか1枚を選び、山札の上にもどす。残りのカードは、山札の下にもどす。",
			'zh-tw': "在自己的回合時可使用1次。查看對手的牌庫上方2張卡，選擇其中1張，放回牌庫上方。將剩餘卡放回牌庫下方。",
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้าม เลือกใบใดใบหนึ่ง 1 ใบ ใส่กลับไปด้านบนของสำรับการ์ด การ์ดที่เหลือ ใส่กลับไปด้านล่างของสำรับการ์ด",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Lihat 2 kartu dari atas Deck lawan, pilih salah satu, lalu kembalikan ke atas Deck. Kembalikan sisa kartu ke bawah Deck."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "サイコアウト",
			'zh-tw': "精神出局",
			'th-th': "ไซโคเอาต์",
			'id-id': "Psyout"
		},

		damage: 120,

		effect: {
			'ja-jp': "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			'th-th': "เลือกการ์ด 1 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 1 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lalu buang ke Trash."
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
				cardmarket: 705266,
				tcgplayer: 567790,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card