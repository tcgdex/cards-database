import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アノクサ",
		'zh-tw': "納噬草",
		th: "อาโนะคุสะ",
		id: "Bramblin"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [946],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "成仏できない 魂が 風に 吹かれているうち 枯草を 巻き込んで ポケモンになった。",
		'zh-tw': "無法升天的靈魂在風的吹拂下被捲進枯草裡， 變成了寶可夢。",
		th: "ขณะที่วิญญาณที่ไปสู่สุคติไม่ได้ถูกลมพัดปลิวไปก็เข้าไปปนเปกับหญ้าที่แห้งเหี่ยวและกลายเป็นโปเกมอน",
		id: "Bramblin adalah arwah gentayangan diterbangkan oleh angin, lalu terjerat oleh rumput kering dan berubah menjadi Pokémon."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ちょっとすいとる",
			'zh-tw': "吸取一下",
			th: "ซับพลัง",
			id: "Menyerap Sedikit"
		},

		damage: 10,

		effect: {
			ja: "このポケモンのHPを「10」回復する。",
			'zh-tw': "將這隻寶可夢恢復「10」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			id: "Pulihkan HP Pokémon ini sejumlah 10."
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