import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "อีเวลทอล",
		id: "Yveltal"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		th: "โปเกมอนในตำนาน เมื่อปีกและขนหางสยายออกกว้างแล้วเปล่งเป็นประกายสีแดง จะสูบพลังชีวิตจากสิ่งมีชีวิตต่าง ๆ",
		id: "Yveltal adalah Pokémon legendaris yang menyerap nyawa makhluk hidup saat sayap dan bulu ekornya terentang lebar dan bersinar merah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "สายลมกัดเซาะ",
			id: "Angin Merasuk"
		},

		effect: {
			th: "วางตัวนับแดเมจบนโปเกมอนฝ่ายตรงข้ามทุกตัวที่มีตัวนับแดเมจวางอยู่ ตัวละ 2 ตัว",
			id: "Letakkan masing-masing sejumlah 2 Token Kerusakan pada semua Pokémon lawan yang memiliki Token Kerusakan."
		},

		cost: ["Darkness"]
	}, {
		name: {
			th: "ลำแสงทำลายล้าง",
			id: "Sinar Kehancuran"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless"]
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