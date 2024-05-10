import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "コリンク",
		'zh-tw': "小貓怪",
		th: "โคลิงก์",
		id: "Shinx"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [403],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "体を 動かすたびに 筋肉が 伸び縮みして 電気が 生まれる。 ピンチになると 体が 輝く。",
		'zh-tw': "每當活動身體時，肌肉的伸縮會產生電流。 當遇上危機時，身體會發光。",
		th: "ทุกครั้งที่ขยับตัว กล้ามเนื้อจะยืดและหดตัวทำให้เกิดไฟฟ้า เมื่อเข้าตาจน ร่างจะเปล่งแสงเป็นประกาย",
		id: "Tiap kali menggerakkan tubuhnya, otot Shinx memanjang dan memendek serta menghasilkan listrik. Pokémon ini bersinar ketika dalam bahaya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "けりつける",
			'zh-tw': "踹",
			th: "ลูกเตะหนักหน่วง",
			id: "Menyepak"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card