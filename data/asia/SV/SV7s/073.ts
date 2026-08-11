import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ไซดอน",
		id: "Rhydon"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		th: "มันวิวัฒนาการขึ้นเพื่อให้สามารถเดินได้ด้วยขาหลังเพียงอย่างเดียว ทำให้มันสามารถแผ่ขยายถิ่นที่อยู่อาศัยได้แม้บนเขาสูงชันก็ตาม",
		id: "Karena telah berevolusi sehingga menjadi dapat berjalan hanya dengan kaki belakangnya, ia dapat memperluas habitatnya bahkan di gunung terjal sekalipun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "เขาแห่งการทำลาย",
			id: "Tanduk Penghancur"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card