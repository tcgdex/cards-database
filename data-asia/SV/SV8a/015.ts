import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "チオンジェン",
		id: "Wo-Chien",
		th: "ฉงเจี่ยน",
		'zh-tw': "古簡蝸",
		'zh-cn': "古簡蝸"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [1001],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "草木の エネルギーを 吸い上げる。 周囲の 森は たちどころに 枯れ果て 田畑は 不作となる。",
		id: "Wo-Chien mengisap energi tumbuhan. Hutan sekeliling Pokémon ini langsung menjadi tandus dan sawah-sawah menjadi gersang.",
		th: "ดูดพลังงานของต้นไม้ใบหญ้า ทำให้ป่าไม้โดยรอบเหี่ยวเฉาอย่างรวดเร็วและไร่นาไม่ค่อยออกผล",
		'zh-tw': "會吸取草木的能量， 使周圍的森林霎時乾枯， 田地的農作物歉收。",
		'zh-cn': "會吸取草木的能量， 使周圍的森林霎時乾枯， 田地的農作物歉收。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "リーフブリング",
			id: "Leaf Bring",
			th: "เบิกใบไม้",
			'zh-tw': "綠葉到來",
			'zh-cn': "綠葉到來"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Daun} dari Trash sendiri, lalu kenakan pada 1 Pokémon sendiri.",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา 1 ตัว",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【草】能量」卡，附於自己的1隻寶可夢身上。",
			'zh-cn': "從自己的棄牌區選擇最多2張「基本【草】能量」卡，附於自己的1隻寶可夢身上。"
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			ja: "どんよくバインド",
			id: "Ketamakan Mengikat",
			th: "โลภมากมัดติด",
			'zh-tw': "貪欲制約",
			'zh-cn': "貪欲制約"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーが、エネルギー2個ぶん多くなる。",
			id: "Pada giliran lawan berikutnya, Energi yang dibutuhkan oleh Pokémon yang menerima serangan ini untuk menggunakan serangan bertambah 2 Energi {Bening}.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ พลังงานสำหรับใช้ท่าต่อสู้ จะใช้พลังงาน[ไร้สี]เพิ่มขึ้น 2 ลูก",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量增加2個【無】能量。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量增加2個【無】能量。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card