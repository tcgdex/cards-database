import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โมนเมน",
		'id-id': "Cottonee"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'th-th': "เนื้อผ้าที่ทอด้วยฝ้ายของวาตะชิรากะผสมกับของโมนเมนนั้นสวยงาม นำไปใช้ทำสินค้าของแบรนด์หรู ๆ",
		'id-id': "Kain bahan yang ditenun menggunakan campuran kapas Cottonee dan Eldegoss sangatlah cantik dan digunakan pada produk bermerek dengan kualitas tinggi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "โจมตีตามใจฉัน",
			'id-id': "Serbuan Semaunya"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card