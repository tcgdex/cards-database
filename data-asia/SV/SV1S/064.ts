import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ムクバード",
		'zh-tw': "姆克鳥",
		th: "มุคูเบิร์ด",
		id: "Staravia"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [397],
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "自分の 弱さを わきまえており いつも 群れで 暮らしている。 １匹になると やかましく 鳴く。",
		'zh-tw': "心知肚明自己的弱小，所以平時都是群體生活。 單獨行動時會發出吵鬧的叫聲。",
		th: "เพราะรู้จุดอ่อนของตัวเองจึงอยู่เป็นฝูงเสมอ พออยู่ตัวเดียวจะส่งเสียงดังโหวกเหวก",
		id: "Karena sadar akan kelemahannya, Staravia selalu hidup bersama kelompoknya. Pokémon ini akan berciap kencang ketika sendirian."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "つばさでうつ",
			'zh-tw': "翅膀攻擊",
			th: "โจมตีด้วยปีก",
			id: "Pukulan Sayap"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スピードひこう",
			'zh-tw': "高速飛行",
			th: "บินเร็วจี๋",
			id: "Terbang Cepat"
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

	retreat: 1,
	regulationMark: "G"
}

export default card