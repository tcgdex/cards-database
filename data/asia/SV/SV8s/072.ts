import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Azumarill",
		'th-th': "มาริลลิ"
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'id-id': "Dengan memfokuskan pendengarannya, Azumarill dapat mendengar apa saja yang ada di dalam sungai berarus deras.",
		'th-th': "ถ้าตั้งใจฟังดี ๆ จะสามารถแยกแยะได้ว่าอะไรอยู่ในแม่น้ำที่ไหลเชี่ยว"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Gelembung Kilau-mengilau",
			'th-th': "ฟองแวววาว"
		},

		effect: {
			'id-id': "Jika ada Pokémon Terastal di Arena sendiri, Energi yang dibutuhkan oleh Pokémon ini untuk menggunakan Serudukan Nekat menjadi 1 Energi {Psychic}.",
			'th-th': "ถ้าบนกระดานฝ่ายเรามีโปเกมอน [เทรัสตัล] อยู่ พลังงานสำหรับใช้ [กระแทก สุดแรง] ของโปเกมอนนี้ จะเป็นพลังงาน[พลังจิต] 1 ลูก"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Serudukan Nekat",
			'th-th': "กระแทกสุดแรง"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 50.",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย"
		},

		damage: 230,
		cost: ["Psychic", "Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card