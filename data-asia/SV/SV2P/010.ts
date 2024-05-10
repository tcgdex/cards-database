import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アノクサ",
		'zh-tw': "納噬草",
		th: "อาโนะคุสะ",
		id: "Bramblin"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [946],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "成仏できない 魂が 風に 吹かれているうち 枯草を 巻き込んで ポケモンになった。",
		'zh-tw': "無法升天的靈魂在風的吹拂下被捲進枯草裡， 變成了寶可夢。",
		th: "ขณะที่วิญญาณที่ไปสู่สุคติไม่ได้ถูกลมพัดปลิวไปก็เข้าไปปนเปกับหญ้าที่แห้งเหี่ยวและกลายเป็นโปเกมอน",
		id: "Bramblin adalah arwah gentayangan diterbangkan oleh angin, lalu terjerat oleh rumput kering dan berubah menjadi Pokémon."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かぜにのる",
			'zh-tw': "乘風",
			th: "ลอยตามลม",
			id: "Menaiki Angin"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "擲1次硬幣若為正面，則將這隻寶可夢與備戰寶可夢互換。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, tukar Pokémon ini dengan Pokémon Cadangan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card