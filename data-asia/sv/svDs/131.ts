import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เพอร์ฟูตง",
		id: "Oinkologne"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		th: "ภูมิใจในผิวที่เนียนสวยของตัวเอง ปล่อยกลิ่นหอมที่กลั่นออกมาจากปลายหางของมัน",
		id: "Kulit halus dan berkilaunya adalah kebanggaan Oinkologne. Pokémon ini mengeluarkan aroma harum yang terkonsentrasi dari ujung ekornya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "เพอร์ฟูมโซเซ",
			id: "Parfum Pusing"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "เตะเข้าเนื้อ",
			id: "Tendangan Pemenyok"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย โปเกมอนนี้ก็จะได้รับแดเมจ 60 ด้วย",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, Pokémon ini juga menerima kerusakan sejumlah 60."
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card