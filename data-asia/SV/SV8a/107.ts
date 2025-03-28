import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "メタング",
		id: "Metang",
		th: "เมแทงก์",
		'zh-tw': "金屬怪",
		'zh-cn': "金屬怪"
	},

	illustrator: "Uta",
	rarity: "None",
	category: "Pokemon",
	dexId: [375],
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "２匹の ダンバルが 磁力で くっついた。 ２つの 脳みそにより サイコパワーは ２倍に 強化。",
		id: "Dua ekor Beldum yang menempel menggunakan kekuatan magnet. Berkat dua otaknya, kekuatan psikokinesis Metang menguat dua kali lipat.",
		th: "ดันบัล 2 ตัวที่เชื่อมติดกันด้วยอำนาจแม่เหล็ก ด้วยเนื้อเยื่อสมอง 2 ก้อนทำให้พลังจิตนั้นแข็งแกร่งขึ้น 2 เท่า",
		'zh-tw': "由２隻鐵啞鈴以磁力結合 而成。因為有２個大腦， 精神力量也強化成２倍了。",
		'zh-cn': "由２隻鐵啞鈴以磁力結合 而成。因為有２個大腦， 精神力量也強化成２倍了。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "メタルメーカー",
			id: "Metal Maker",
			th: "เมทัลเมกเกอร์",
			'zh-tw': "金屬製造者",
			'zh-cn': "金屬製造者"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を上から4枚見て、その中から「基本エネルギー」を好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードはすべてウラにして切り、山札の下にもどす。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Lihat 4 kartu dari atas Deck sendiri, pilih sesukanya Energi Dasar {Logam} di antaranya, lalu kenakan sesukanya pada Pokémon sendiri. Kocok semua sisa kartu dengan sisi depan menghadap ke bawah, lalu kembalikan ke bawah Deck.",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 4 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[โลหะ]] จากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ สับการ์ดที่เหลือทั้งหมดโดยไม่ดูหน้าการ์ด ใส่กลับไปด้านล่างของสำรับการ์ด",
			'zh-tw': "在自己的回合時可使用1次。查看自己的牌庫上方4張卡，從其中選擇任意數量的「基本【鋼】能量」卡，以任意方式附於自己的寶可夢身上。將剩餘卡全部翻回反面並重洗，放回牌庫下方。",
			'zh-cn': "在自己的回合時可使用1次。查看自己的牌庫上方4張卡，從其中選擇任意數量的「基本【鋼】能量」卡，以任意方式附於自己的寶可夢身上。將剩餘卡全部翻回反面並重洗，放回牌庫下方。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ビーム",
			id: "Beam",
			th: "ลำแสง",
			'zh-tw': "光束",
			'zh-cn': "光束"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card