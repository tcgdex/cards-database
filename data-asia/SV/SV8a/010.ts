import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "カミツオロチex",
		id: "Hydrapple ex",
		th: "คามิสึโอโรจิex",
		'zh-tw': "蜜集大蛇ex",
		'zh-cn': "蜜集大蛇ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "じゅくせいチャージ",
			id: "Muatan Matang",
			th: "ชาร์จความสุก",
			'zh-tw': "‌熟成充能",
			'zh-cn': "‌熟成充能"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンのHPを「30」回復する。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri. Setelah itu, pulihkan HP Pokémon yang telah dikenakan Energi sejumlah 30.",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา หลังจากนั้น ฟื้นฟู HP ของโปเกมอนที่ติดการ์ดนั้น [30]",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於自己的寶可夢身上。然後，將附上那張卡的寶可夢恢復「30」HP。",
			'zh-cn': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於自己的寶可夢身上。然後，將附上那張卡的寶可夢恢復「30」HP。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "みつあめストーム",
			id: "Badai Sirop Nektar",
			th: "พายุน้ำตาลเชื่อม",
			'zh-tw': "蜜糖風暴",
			'zh-cn': "蜜糖風暴"
		},

		damage: "30+",

		effect: {
			ja: "自分のポケモン全員についているエネルギーの数×30ダメージ追加。",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi {Daun} yang dikenakan pada semua Pokémon sendiri.",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[หญ้า]ที่ติดอยู่กับโปเกมอนฝ่ายเราทุกตัว x30",
			'zh-tw': "增加自己的所有寶可夢身上附加的【草】能量的數量×30點傷害。",
			'zh-cn': "增加自己的所有寶可夢身上附加的【草】能量的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card