import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミストエネルギー",
		id: "Energi Kabut",
		th: "มิสต์เอนเนอร์จี้",
		'zh-tw': "薄霧能量",
		'zh-cn': "薄霧能量"
	},

	rarity: "None",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンは、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）",
		id: "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Pokémon yang mengenakan kartu ini tidak menerima efek akibat serangan yang digunakan oleh Pokémon lawan. (Efek yang telah dialami tidak dipulihkan.)",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก โปเกมอนที่ติดการ์ดนี้อยู่ จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้ (เอฟเฟกต์ที่ได้รับไปแล้ว จะไม่หายไป)",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 附有這張卡的寶可夢不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果不會消除。）",
		'zh-cn': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 附有這張卡的寶可夢不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果不會消除。）"
	},

	energyType: "Special",
	regulationMark: "H"
}

export default card