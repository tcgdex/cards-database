import { Card } from "../../../interfaces"
import Set from "../svHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霓虹魚V",
		th: "เนโอแลนท์V",
		id: "Lumineon V"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "夜光標誌",
			th: "ลูมินัสไซน์",
			id: "Luminous Sign"
		},

		effect: {
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เลือกการ์ดซัพพอร์ต 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Pilih 1 lembar Supporter dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水迴旋",
			th: "อควารีเทิร์น",
			id: "Aqua Return"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			th: "นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายเราแล้วสับ",
			id: "Kocok kembali Pokémon ini dan semua kartu yang dikenakannya ke Deck sendiri."
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card