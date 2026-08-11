import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ซึรุกกุ <ของแมรี>",
		id: "Scraggy <Marnie>"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		th: "ดึงหนังที่ยืดหย่อนขึ้นมาจนถึงคอเพื่อป้องกันตัว ดูเหมือนว่าตัวที่หนังยิ่ง ยืดมากเท่าไหร่ก็จะยิ่งได้รับการยกย่องมากเท่านั้น",
		id: "Scraggy berlindung dengan menarik ke atas kulitnya yang memanjang dan kendur hingga ke lehernya. Tampaknya makin panjang kulit individu tersebut, makin hebat pula posisinya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กัดขย้ำ",
			id: "Mengunyah"
		},

		effect: {
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 50,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card