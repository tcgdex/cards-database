import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "อุปกรณ์ช่วยเรียนรู้ [ไอเท็มติดโปเกมอน]",
		id: "Pembagi Pengalaman"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		th: "ทุกครั้งที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรา ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ] จะเลือกการ์ดพลังงานพื้นฐานที่ติดอยู่กับโปเกมอนนั้น 1 ใบ ย้ายไปติดกับโปเกมอนที่ติดการ์ดนี้อยู่ก็ได้",
		id: "Tiap kali Pokémon Bertarung sendiri KO karena menerima kerusakan akibat serangan dari Pokémon lawan, pemain dapat memilih 1 lembar Energi Dasar yang dikenakan pada Pokémon tersebut, lalu memindahkannya ke Pokémon yang mengenakan kartu ini."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card