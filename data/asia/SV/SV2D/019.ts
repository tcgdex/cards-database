import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コリンク",
		'zh-tw': "小貓怪",
		'th-th': "โคลิงก์",
		'id-id': "Shinx"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [403],
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "体を 動かすたびに 筋肉が 伸び縮みして 電気が 生まれる。 ピンチになると 体が 輝く。",
		'zh-tw': "每當活動身體時，肌肉的伸縮會產生電流。 當遇上危機時，身體會發光。",
		'th-th': "ทุกครั้งที่ขยับตัว กล้ามเนื้อจะยืดและหดตัวทำให้เกิดไฟฟ้า เมื่อเข้าตาจน ร่างจะเปล่งแสงเป็นประกาย",
		'id-id': "Tiap kali menggerakkan tubuhnya, otot Shinx memanjang dan memendek serta menghasilkan listrik. Pokémon ini bersinar ketika dalam bahaya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "けりつける",
			'zh-tw': "踹",
			'th-th': "ลูกเตะหนักหน่วง",
			'id-id': "Menyepak"
		},

		damage: 30,

		effect: {
			'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705323,
				tcgplayer: 565881,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card