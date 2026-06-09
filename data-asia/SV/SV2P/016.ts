import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マリル",
		'zh-tw': "瑪力露",
		th: "มาริล",
		id: "Marill"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [183],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。",
		'zh-tw': "全身的體毛有著能將水彈開的特性， 所以就算碰到水也不會弄濕。",
		th: "ขนทั่วตัวมีคุณสมบัติที่ไม่ดูดซึมน้ำ ถึงอาบน้ำตัวก็ยังแห้ง",
		id: "Bulu Marill bersifat menangkal air. Bulu tersebut tetap kering meskipun Pokémon ini terguyur air."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "バブルドレイン",
			'zh-tw': "泡沫吸取",
			th: "บับเบิลเดรน",
			id: "Bubble Drain"
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
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 705249
	}
}

export default card