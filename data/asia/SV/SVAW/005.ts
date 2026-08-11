import { Card } from "../../../interfaces"
import Set from "../SVAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咚咚鼠",
		th: "เดเด็นเนะ",
		id: "Dedenne"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "由於體型嬌小，發電器官尚未發達，因此會用尾巴 吸取住家的電力來充電。",
		th: "อวัยวะผลิตกระแสไฟฟ้ามีขนาดเล็กและยังไม่พัฒนาเต็มที่ เลยชอบเอาหางไปดูดไฟฟ้าจากบ้านคนเพื่อชาร์จไฟฟ้า",
		id: "Dedenne mengecas dan menyerap listrik dari rumah manusia menggunakan ekornya karena tubuhnya kecil dan organ pembangkit listriknya masih belum sempurna."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住傷口",
			th: "กัดติดบาดแผล",
			id: "Menggigit Luka"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "30+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card