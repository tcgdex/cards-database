import { Card } from "../../../interfaces"
import Set from "../svAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "新葉喵",
		th: "เนียวฮะ",
		id: "Sprigatito"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "毛茸茸的體毛有著近似於植物的成分。 會勤快地洗臉以防止乾燥。",
		th: "ขนตามร่างกายที่นุ่มฟูมีส่วนประกอบที่คล้ายกับพืช ล้างหน้าบ่อยครั้งเพื่อป้องกันไม่ให้หน้าแห้ง",
		id: "Bulu Sprigatito yang halus mengandung komponen yang dekat dengan tumbuhan. Pokémon ini rajin mencuci mukanya agar tidak kering."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "抓",
			th: "ข่วน",
			id: "Menggaruk"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "樹葉",
			th: "ใบไม้",
			id: "Dedaunan"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card