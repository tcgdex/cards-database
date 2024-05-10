import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ミモザ",
		'zh-tw': "米莫莎",
		th: "มิโมซา",
		id: "Mimi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンを5枚まで選び、相手に見せて、山札にもどして切る。その後、山札を3枚引く。",
		'zh-tw': "從自己的棄牌區選擇最多5張寶可夢卡，在給對手看過後放回牌庫並重洗。然後，從牌庫抽出3張卡。",
		th: "เลือกการ์ดโปเกมอนได้สูงสุด 5 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู ใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น จั่วการ์ด 3 ใบจากสำรับการ์ด",
		id: "Pilih paling banyak 5 lembar Pokémon dari Trash sendiri, perlihatkan ke lawan, lalu kocok kembali ke Deck. Setelah itu, ambil 3 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card