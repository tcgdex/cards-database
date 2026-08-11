import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ルミナスエネルギー",
		'zh-tw': "夜光能量",
		'th-th': "ลูมินัสเอนเนอร์จี้",
		'id-id': "Energi Luminans"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンに、このカード以外の特殊エネルギーがついているなら、エネルギー1個ぶんとしてはたらく。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個所有屬性的能量。 若附有這張卡的寶可夢身上附有這張卡以外的特殊能量卡，則視為提供1個【無】能量。",
		'th-th': "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงานทุกประเภท 1 ลูก ถ้าโปเกมอนที่ติดการ์ดนี้อยู่ มีพลังงานพิเศษอื่นนอกเหนือจากการ์ดนี้ติดอยู่ จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก",
		'id-id': "Kartu ini berlaku sebagai 1 Energi semua tipe selama dikenakan pada Pokémon. Jika Pokémon yang mengenakan kartu ini mengenakan Energi Spesial selain kartu ini, kartu ini berlaku sebagai 1 Energi {Bening}."
	},

	energyType: "Special",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701127,
				tcgplayer: 568196,
			},
		},
	],

	regulationMark: "G"
}

export default card