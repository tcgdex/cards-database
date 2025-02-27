import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジェットエネルギー",
		id: "Energi Jet",
		th: "เจ็ตเอนเนอร์จี้",
		'zh-tw': "噴射能量",
		'zh-cn': "噴射能量"
	},

	rarity: "None",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードを手札からベンチポケモンにつけたとき、このカードをつけたポケモンを、バトルポケモンと入れ替える。",
		id: "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Saat kartu ini dikenakan dari Kartu Pegangan pada Pokémon Cadangan, tukar Pokémon yang telah dikenakan kartu ini dengan Pokémon Bertarung.",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก เมื่อนำการ์ดนี้จากบนมือติดที่โปเกมอนบนเบนช์ สลับโปเกมอนที่ติดการ์ดนี้ กับโปเกมอนบนตำแหน่งต่อสู้",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 從手牌將這張卡附於備戰寶可夢身上時，將附有這張卡的寶可夢與戰鬥寶可夢互換。",
		'zh-cn': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 從手牌將這張卡附於備戰寶可夢身上時，將附有這張卡的寶可夢與戰鬥寶可夢互換。"
	},

	energyType: "Special",
	regulationMark: "G"
}

export default card