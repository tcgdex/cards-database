import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ไฟร์แอโรว์",
		id: "Talonflame"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		th: "ถ้าตื่นเต้นจะมีประกายไฟพ่นออกมาจากระหว่างขน เพราะขนไม่ติดไฟเลยถูกเอาไปทำวัสดุป้องกันไฟ",
		id: "Jika semangatnya bergejolak, Talonflame mengembuskan bubuk api melalui celah bulunya. Bulunya yang tidak terbakar dimanfaatkan sebagai material anti api."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "แอโรเชส",
			id: "Aero Chase"
		},

		effect: {
			th: "ถ้าพลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีมากกว่าหรือเท่ากับ 2 ลูก การโจมตีนี้จะเพิ่มแดเมจอีก 110",
			id: "Kerusakan yang diberikan bertambah sejumlah 110 jika Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur adalah 2 atau lebih."
		},

		damage: "110+",
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

	retreat: 0,
	regulationMark: "H"
}

export default card