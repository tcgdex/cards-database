import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "メディカルエネルギー",
		'zh-tw': "醫療能量",
		th: "เมดิคัลเอนเนอร์จี้"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードを手札からポケモンにつけたとき、そのポケモンのHPを「30」回復する。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 從手牌將這張卡附於寶可夢身上時，將那隻寶可夢恢復「30」HP。",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก เมื่อนำการ์ดนี้จากบนมือติดที่โปเกมอน ฟื้นฟู HP ของโปเกมอนนั้น [30]"
	},

	energyType: "Special",
	regulationMark: "G"
}

export default card