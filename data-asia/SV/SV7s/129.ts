import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "บูเนียตโตะ",
		id: "Purugly"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		th: "ถ้าที่อยู่ของโปเกมอนอื่นอยู่สบาย ก็จะยึดมาเป็นที่อยู่ของตน",
		id: "Meskipun itu tempat tinggal Pokémon lain, jika tempatnya nyaman, Purugly akan menduduki dan menjadikan tempat itu sebagai tempat tinggalnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "เหมียวกลิ้ง",
			id: "Dengkur Meong"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		damage: 80,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card