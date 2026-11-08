import { Card } from "models/database/card"
import Set from "../SVHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉帝亞斯",
		'th-th': "ลาทิอาส",
		'id-id': "Latias"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "能透過心靈感應交流情感。用能令光線折射的羽毛 包裹身體來隱藏自己的樣子。",
		'th-th': "สื่อความรู้สึกด้วยพลังจิต ใช้ขนปีกที่ทำให้แสงหักเหได้ห่อหุ้มร่างเพื่อเร้นกายหายตัว",
		'id-id': "Ia saling mengomunikasikan perasaannya dengan telepati. Pokémon ini menghilangkan wujudnya dengan membungkus tubuhnya menggunakan bulu yang membiaskan cahaya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸引",
			'th-th': "ยั่วยวน",
			'id-id': "Mengambil"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。",
			'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 2 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "潟湖飛行",
			'th-th': "ลากูนไฟลต์",
			'id-id': "Lagoon Flight"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
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