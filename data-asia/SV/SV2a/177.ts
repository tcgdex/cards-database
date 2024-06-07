import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴーリキー",
		'zh-tw': "豪力",
		th: "โกริกี",
		id: "Machoke"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	dexId: [67],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "疲れることのない 強靭な 肉体を もつ。 重い 荷物の 運搬などの 仕事を 手伝う。",
		'zh-tw': "有著不會疲勞的強韌肉體。會去幫助人類完成例如搬運沉重行李之類的工作。",
		th: "มีร่างกายแข็งแรงทนทานไม่เคยรู้สึกเหนื่อย ช่วยงานขนยกของหนัก ๆ",
		id: "Tubuh Machoke tangguh dan tidak mengenal lelah. Pokémon ini membantu melakukan pekerjaan seperti mengangkut barang berat dan lainnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "やまどつき",
			'zh-tw': "推山",
			th: "ต่อยตีภูเขา",
			id: "Menohok Gunung"
		},

		damage: 50,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 1 kartu dari atas Deck lawan ke Trash."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card