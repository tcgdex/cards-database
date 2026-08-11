import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ムクバード",
		'zh-tw': "姆克鳥",
		'th-th': "มุคูเบิร์ด",
		'id-id': "Staravia"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [397],
	hp: 80,
	types: ["Colorless"],

	description: {
		'ja-jp': "自分の 弱さを わきまえており いつも 群れで 暮らしている。 １匹になると やかましく 鳴く。",
		'zh-tw': "心知肚明自己的弱小，所以平時都是群體生活。 單獨行動時會發出吵鬧的叫聲。",
		'th-th': "เพราะรู้จุดอ่อนของตัวเองจึงอยู่เป็นฝูงเสมอ พออยู่ตัวเดียวจะส่งเสียงดังโหวกเหวก",
		'id-id': "Karena sadar akan kelemahannya, Staravia selalu hidup bersama kelompoknya. Pokémon ini akan berciap kencang ketika sendirian."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "つばさでうつ",
			'zh-tw': "翅膀攻擊",
			'th-th': "โจมตีด้วยปีก",
			'id-id': "Pukulan Sayap"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "スピードひこう",
			'zh-tw': "高速飛行",
			'th-th': "บินเร็วจี๋",
			'id-id': "Terbang Cepat"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693031,
				tcgplayer: 567181,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card