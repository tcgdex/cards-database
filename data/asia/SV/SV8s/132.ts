import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Altaria",
		th: "ทิลทาลิส"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		id: "Pada hari yang cerah, Altaria terbang dengan bebas di angkasa sambil bersembunyi di antara awan kapas dan menyanyi dengan suara sopran yang indah.",
		th: "วันที่อากาศแจ่มใสจะแฝงตัวเข้าไปอยู่ในปุยเมฆพลางโผบินไปมาบน ท้องฟ้าและร้องเพลงด้วยเสียงโซปราโนอันไพเราะ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Humming Charge",
			th: "ฮัมมิงชาร์จ"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, lalu kenakan sesukanya pada Pokémon sendiri. Kemudian, kocok Deck.",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอน ฝ่ายเราตามชอบ แล้วสับสำรับการ์ด"
		},

		cost: ["Water"]
	}, {
		name: {
			id: "Cotton Wing",
			th: "ค็อททอนวิง"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้ รับแดเมจของท่าต่อสู้"
		},

		damage: 100,
		cost: ["Water", "Metal"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card