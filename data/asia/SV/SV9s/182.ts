import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฮาราบารีex ของนันจาโม",
		'id-id': "Bellibolt <Mistika> ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "อิเล็กทริกสตรีมเมอร์",
			'id-id': "Streamer Elektrik"
		},

		effect: {
			'th-th': "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] 1 ใบจากบนมือ ฝ่ายเรา ติดที่ [โปเกมอนของนันจาโม] ฝ่ายเรา",
			'id-id': "Dapat digunakan berkali-kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Listrik} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon Mistika sendiri."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ธันเดอร์โบลต์",
			'id-id': "Thunderbolt"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 230,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	suffix: "EX"
}

export default card