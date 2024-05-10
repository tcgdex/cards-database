import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジェットエネルギー",
		'zh-tw': "噴射能量",
		th: "เจ็ตเอนเนอร์จี้",
		id: "Energi Jet"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードを手札からベンチポケモンにつけたとき、このカードをつけたポケモンを、バトルポケモンと入れ替える。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 從手牌將這張卡附於備戰寶可夢身上時，將附有這張卡的寶可夢與戰鬥寶可夢互換。",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก เมื่อนำการ์ดนี้จากบนมือติดที่โปเกมอนบนเบนช์ สลับโปเกมอนที่ติดการ์ดนี้ กับโปเกมอนบนตำแหน่งต่อสู้",
		id: "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Saat kartu ini dikenakan dari Kartu Pegangan pada Pokémon Cadangan, tukar Pokémon yang telah dikenakan kartu ini dengan Pokémon Bertarung."
	},

	energyType: "Normal",
	illustrator: "n/a",
	regulationMark: "G"
}

export default card