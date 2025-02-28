import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Quaquaval",
		th: "เวนิวัล"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		id: "Dengan tariannya yang eksotis, Quaquaval memesona siapa pun yang melihatnya. Pokémon ini menyayat lawan dengan melambai-lambaikan bulu dekorasi yang terbuat dari air.",
		th: "ทำให้ผู้ที่ดูการเต้นรำหลงใหลด้วยท่วงท่าที่เต็มไปด้วยกลิ่นอายจาก ต่างแดน สะบัดขนนกประดับที่ทำจากน้ำเพื่อเชือดเฉือนอีกฝ่าย"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Up Tempo",
			th: "เร่งจังหวะ"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika mengembalikan 1 lembar Kartu Pegangan sendiri ke bawah Deck. Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 5 lembar.",
			th: "ในเทิร์นฝ่ายเรา ถ้านำการ์ดบนมือฝ่ายเรา 1 ใบใส่กลับไปด้านล่างของสำรับ การ์ด ใช้ได้ 1 ครั้ง จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 5 ใบ"
		}
	}],

	attacks: [{
		name: {
			id: "Hydro Splash",
			th: "ไฮโดรสแปลช"
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card