import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โอลองเกะex <ของแมรี>",
		id: "Grimmsnarl <Marnie> ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "พังก์อัป",
			id: "Punk Up"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกการ์ด [พลังงานพื้นฐาน[ความมืด]] ได้สูงสุด 5 ใบจากสำรับการ์ดฝ่ายเรา ติดที่ [โปเกมอนของแมรี] ฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih paling banyak 5 lembar Energi Dasar {Kegelapan} dari Deck sendiri, lalu kenakan sesukanya pada Pokémon Marnie sendiri. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			th: "ชาโดว์บูลเล็ต",
			id: "Shadow Bullet"
		},

		effect: {
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอน บนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 180,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	suffix: "EX"
}

export default card