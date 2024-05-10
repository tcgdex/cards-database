import { Card } from "../../../interfaces"
import Set from "../svHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "來電汪",
		th: "วันปาจิ",
		id: "Yamper"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "奔跑的時候會從尾巴的根部製造出電能。在伽勒爾 是很受歡迎的牧羊犬。",
		th: "เมื่อวิ่งจะมีไฟฟ้าผลิตออกมาจากโคนหาง เป็นที่นิยมในกาลาร์ในฐานะสุนัขเลี้ยงแกะ",
		id: "Saat berlari, Yamper menghasilkan listrik pada bagian dasar ekornya. Populer sebagai anjing gembala di Galar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "胡思亂撞",
			th: "โจมตีแปรปรวน",
			id: "Serudukan Semaunya"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card