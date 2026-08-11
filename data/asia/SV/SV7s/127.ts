import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โยรุโนะซึคุ",
		id: "Noctowl"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		th: "เพราะปีกที่อ่อนนุ่มมากทำให้ไม่เกิดเสียงในยามที่บิน จึงแอบเข้าใกล้เหยื่อได้โดยที่เหยื่อไม่รู้ตัว",
		id: "Karena sayapnya yang sangat lembut tidak mengeluarkan suara ketika terbang, ia dapat mendekati mangsanya dengan diam-diam."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "ค้นหาอัญมณี",
			id: "Mencari Permata"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ถ้าบนกระดานฝ่ายเรามีโปเกมอน [เทรัสตัล] อยู่ ใช้ได้ 1 ครั้ง เลือกการ์ดเทรนเนอร์ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika ada Pokémon Terastal di Arena sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih paling banyak 2 lembar Trainer dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			th: "สปีดวิง",
			id: "Speed Wing"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card