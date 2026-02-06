import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギダネ",
		'zh-tw': "妙蛙種子",
		th: "ฟุชิกิดาเนะ",
		id: "Bulbasaur"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [1],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "生まれて しばらくの あいだ 背中の タネに つまった 栄養を とって 育つ。",
		'zh-tw': "在出生後的一段時間內，牠會吸收背上種子裡 儲存著的營養成長。",
		th: "ในช่วงเวลาหนึ่งหลังจากเกิดมาแล้ว จะดูดกินสารอาหารที่สะสมไว้ในเมล็ดที่อยู่กลางหลังเพื่อเลี้ยงตัวให้เติบโต",
		id: "Sesaat setelah dilahirkan, Bulbasaur menggunakan nutrisi yang terkandung dalam biji di punggungnya untuk tumbuh."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "やどりぎのタネ",
			'zh-tw': "寄生種子",
			th: "เมล็ดกาฝาก",
			id: "Bibit Parasit"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [20]",
			id: "Pulihkan HP Pokémon ini sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719442
	}
}

export default card