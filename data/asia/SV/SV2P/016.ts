import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マリル",
		'zh-tw': "瑪力露",
		'th-th': "มาริล",
		'id-id': "Marill"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [183],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。",
		'zh-tw': "全身的體毛有著能將水彈開的特性， 所以就算碰到水也不會弄濕。",
		'th-th': "ขนทั่วตัวมีคุณสมบัติที่ไม่ดูดซึมน้ำ ถึงอาบน้ำตัวก็ยังแห้ง",
		'id-id': "Bulu Marill bersifat menangkal air. Bulu tersebut tetap kering meskipun Pokémon ini terguyur air."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "バブルドレイン",
			'zh-tw': "泡沫吸取",
			'th-th': "บับเบิลเดรน",
			'id-id': "Bubble Drain"
		},

		damage: 20,

		effect: {
			'ja-jp': "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [20]",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705249,
				tcgplayer: 567773,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card