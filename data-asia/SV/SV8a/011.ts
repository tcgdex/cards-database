import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "アノクサ",
		id: "Bramblin",
		th: "อาโนะคุสะ",
		'zh-tw': "納噬草",
		'zh-cn': "納噬草"
	},

	illustrator: "Tetsu Kayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [946],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "風に吹かれて 荒野を 転がり 行き先は 自分でも わからない。 体が 濡れるのが 大嫌い。",
		id: "Bramblin bergulir ditiup angin di padang gurun tanpa mengetahui tujuannya. Pokémon ini sangat benci jika tubuhnya menjadi basah.",
		th: "ถูกลมพัดกลิ้งไปตามทุ่งหญ้ารกร้าง แม้แต่ตัวเองก็ไม่รู้ว่ากำลังมุ่งหน้าไปที่ไหน เกลียดการที่ร่างกายเปียกชุ่มเป็นอย่างมาก",
		'zh-tw': "在風的吹拂下滾動於荒野間， 就連自己也不知道會滾到哪裡去。 最討厭身體被弄得濕答答的。",
		'zh-cn': "在風的吹拂下滾動於荒野間， 就連自己也不知道會滾到哪裡去。 最討厭身體被弄得濕答答的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "トゲでさす",
			id: "Duri Penusuk",
			th: "แทงด้วยหนาม",
			'zh-tw': "針刺",
			'zh-cn': "針刺"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card