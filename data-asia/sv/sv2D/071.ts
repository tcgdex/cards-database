import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "セラピーエネルギー",
		'zh-tw': "治療能量",
		th: "เทอราปีเอนเนอร์จี้",
		id: "Energi Terapi"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンはねむり・マヒ・こんらんにならず、受けているねむり・マヒ・こんらんは、すべて回復する。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 附有這張卡的寶可夢不會【睡眠】・【麻痺】・【混亂】，受到的【睡眠】・【麻痺】・【混亂】全部恢復。",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก โปเกมอนที่ติดการ์ดนี้อยู่ จะไม่เป็นสภาวะ[หลับ]/[ชา]/[สับสน] และจะหายจากสภาวะ[หลับ]/[ชา]/[สับสน] ทั้งหมดที่ได้รับมา",
		id: "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Pokémon yang mengenakan kartu ini tidak akan menjadi Tidur, Lumpuh, atau Pusing dan jika sedang mengalami kondisi Tidur, Lumpuh, atau Pusing, pulihkan kondisi Tidur, Lumpuh, atau Pusing yang dialami Pokémon tersebut."
	},

	energyType: "Normal",
	illustrator: "n/a",
	regulationMark: "G"
}

export default card