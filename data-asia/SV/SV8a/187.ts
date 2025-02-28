import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "レガシーエネルギー",
		id: "Energi Legasi",
		th: "พลังงานสืบทอด",
		'zh-tw': "古舊能量",
		'zh-cn': "古舊能量"
	},

	rarity: "None",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。対戦中、自分の「レガシーエネルギー」のこの効果は、1回しかはたらかない。",
		id: "Kartu ini berlaku sebagai 1 Energi semua tipe selama dikenakan pada Pokémon. Saat Pokémon yang mengenakan kartu ini KO karena menerima kerusakan akibat serangan dari Pokémon lawan, Kartu Point yang diambil lawan berkurang 1 lembar. Efek ini yang berjalan berkat Energi Legasi sendiri hanya berjalan 1 kali dalam sebuah permainan.",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงานทุกประเภท 1 ลูก เมื่อโปเกมอนที่ติดการ์ดนี้อยู่ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว การ์ดรางวัลที่หยิบได้จะลดลง 1 ใบ ในระหว่างการแบตเทิล เอฟเฟกต์นี้ของ [พลังงานสืบทอด] ฝ่ายเราจะทำงาน 1 ครั้งเท่านั้น",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個所有屬性的能量。 附有這張卡的寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，被獲得的獎賞卡減少1張。對戰中，自己的「古舊能量」的這個效果只生效1次。",
		'zh-cn': "只要這張卡附於寶可夢身上，視為提供1個所有屬性的能量。 附有這張卡的寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，被獲得的獎賞卡減少1張。對戰中，自己的「古舊能量」的這個效果只生效1次。"
	},

	energyType: "Special",
	regulationMark: "H"
}

export default card