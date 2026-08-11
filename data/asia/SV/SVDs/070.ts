import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "เนทิโอ",
		id: "Xatu"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		th: "โปเกมอนแปลก ๆ ที่มองทะลุได้ทั้งอดีตและปัจจุบัน ทุกวันจะเฝ้ามองการเคลื่อนที่ของดวงอาทิตย์อยู่ตลอด",
		id: "Xatu melihat masa lalu dan masa depan. Pokémon misterius yang setiap hari terus melihat pergerakan matahari."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "สัมผัสซิกซ์เซนส์",
			id: "Akashic Sense"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[พลังจิต]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนบนเบนช์ หลังจากนั้น จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Psychic} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon Cadangan. Setelah itu, ambil 2 kartu dari atas Deck sendiri."
		}
	}],

	attacks: [{
		name: {
			th: "ซูเปอร์โทรจิต",
			id: "Psikokinesis Super"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
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