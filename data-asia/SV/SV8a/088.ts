import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "スナノケガワex",
		id: "Sandy Shocks ex",
		th: "ขนทรายex",
		'zh-tw': "沙鐵皮ex",
		'zh-cn': "沙鐵皮ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "じりょくきゅうしゅう",
			id: "Isapan Kekuatan Magnet",
			th: "ดูดซับแรงแม่เหล็ก",
			'zh-tw': "磁力吸收",
			'zh-cn': "磁力吸收"
		},

		effect: {
			ja: "相手のサイドの残り枚数が4枚以下なら、自分の番に1回使える。自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika sisa Kartu Point lawan adalah 4 lembar atau kurang. Pilih 1 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan pada Pokémon ini.",
			th: "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้ามน้อยกว่าหรือเท่ากับ 4 ใบ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			'zh-tw': "若對手剩餘獎賞卡的張數為4張以下，則在自己的回合時可使用1次。從自己的棄牌區選擇1張「基本【鬥】能量」卡，附於這隻寶可夢身上。",
			'zh-cn': "若對手剩餘獎賞卡的張數為4張以下，則在自己的回合時可使用1次。從自己的棄牌區選擇1張「基本【鬥】能量」卡，附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "グラウンドスパイク",
			id: "Ground Spike",
			th: "กราวนด์สไปก์",
			'zh-tw': "大地扣殺",
			'zh-cn': "大地扣殺"
		},

		damage: 200,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card