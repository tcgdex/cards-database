import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "モグリュー",
		id: "Drilbur",
		th: "โมกุริว",
		'zh-tw': "螺釘地鼠",
		'zh-cn': "螺釘地鼠"
	},

	illustrator: "Kariya",
	rarity: "None",
	category: "Pokemon",
	dexId: [529],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "両手の ツメを 重ね合わせ 体を 高速回転 させると 獲物 めがけて 突っ込むのだ。",
		id: "Drilbur merapatkan cakar di kedua tangannya, berputar dengan kecepatan tinggi, dan menabrakkan diri ke arah mangsanya.",
		th: "ประกบเล็บมือทั้งสองข้างเข้าด้วยกัน แล้วหมุนตัวด้วยความรวดเร็ว แล้วพุ่งเข้าใส่เหยื่อ",
		'zh-tw': "會將雙掌上的爪子併攏， 並讓身體高速旋轉， 瞄準獵物衝過去。",
		'zh-cn': "會將雙掌上的爪子併攏， 並讓身體高速旋轉， 瞄準獵物衝過去。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ほりまくり",
			id: "Menggali Terus",
			th: "ขุดไม่หยุด",
			'zh-tw': "狂挖",
			'zh-cn': "狂挖"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札から「基本エネルギー」を3枚まで選び、トラッシュする。そして山札を切る。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Psychic} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon Cadangan. Setelah itu, ambil 2 kartu dari atas Deck sendiri.",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ทิ้งที่ตำแหน่งทิ้งการ์ด แล้วสับสำรับการ์ด",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇最多3張「基本【鬥】能量」卡，將其丟棄。並且重洗牌庫。",
			'zh-cn': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇最多3張「基本【鬥】能量」卡，將其丟棄。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "すなしぶき",
			id: "Semburan Pasir",
			th: "ละอองทราย",
			'zh-tw': "沙沫",
			'zh-cn': "沙沫"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card