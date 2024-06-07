import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ゾウドウ",
		'zh-tw': "銅象",
		th: "โซโด",
		id: "Cufant"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [878],
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "尖った 鼻先で 硬い 岩を 削り取って 食べる。 温厚で 人の 力仕事を 手伝う。",
		'zh-tw': "尖尖的鼻尖能削斷堅硬的岩石來作為糧食。性情溫馴， 會幫助人類做粗重的工作。",
		th: "ใช้ปลายจมูกที่แหลมคมในการขูดก้อนหินแข็ง ๆ แล้วนำมากิน มีนิสัยอ่อนโยนมักช่วยมนุษย์ทำงานที่ใช้แรง",
		id: "Cufant menggunakan ujung hidung lancipnya untuk mengikis batu dan memakannya. Sifatnya lemah lembut dan membantu pekerjaan berat manusia."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩",
			th: "เหยียบ",
			id: "Menginjak"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card