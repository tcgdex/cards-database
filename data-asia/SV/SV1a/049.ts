import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "イワンコ",
		'zh-tw': "岩狗狗",
		th: "อิวังโค",
		id: "Rockruff"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [744],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "小さいころは よく 懐く。 育つと 気性が 荒くなるが 主への 恩は 忘れない。",
		'zh-tw': "年幼時期非常容易親近。雖然長大後脾氣會變得粗暴， 卻絕不會忘記主人的恩情。",
		th: "ตอนยังเล็กค่อนข้างเชื่อง พอโตแล้วดุร้ายขึ้น แต่ไม่ลืมบุญคุณเจ้าของ",
		id: "Rockruff sangat jinak saat masih kecil. Meskipun tumbuh menjadi kasar, Pokémon ini tidak pernah melupakan kebaikan pemiliknya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわおとし",
			'zh-tw': "落石",
			th: "หินผาถล่ม",
			id: "Lemparan Batu"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住",
			th: "กัดติด",
			id: "Menggigit"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card