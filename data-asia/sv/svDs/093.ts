import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "อาร์โบ",
		id: "Ekans"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		th: "ของโปรดคือไข่ของโปเกมอนนก เนื่องจากชอบกลืนเข้าไปทั้งคำโดยไม่เคี้ยว บางครั้งจึงติดคอจนหมดสติไป",
		id: "Telur Pokémon burung adalah makanan favorit Ekans. Kadang Pokémon ini menelan telur tanpa mengunyahnya, sehingga pingsan karena telur tersangkut di kerongkongannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ระเบิดกรด",
			id: "Semprotan Asam"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 30,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card