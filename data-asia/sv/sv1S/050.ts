import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "コライドンex",
		'zh-tw': "故勒頓ex",
		th: "โคไรดอนex",
		id: "Koraidon ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ディノクライ",
			'zh-tw': "恐龍嘶吼",
			th: "ไดโนคราย",
			id: "Dino Cry"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、番は終わる。自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のタイプのたねポケモンに好きなようにつける。",
			'zh-tw': "在自己的回合時可使用1次，若使用，則回合結束。從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，以任意方式附於自己的【鬥】屬性的【基礎】寶可夢身上。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้ว จะจบเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอน[พื้นฐาน]ประเภท[ต่อสู้]ฝ่ายเราตามชอบ",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Giliran akan selesai jika menggunakan Ability ini. Pilih paling banyak 2 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan sesukanya pada Pokémon Basic tipe {Petarung} sendiri."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ワイルドインパクト",
			'zh-tw': "瘋狂衝擊",
			th: "ไวลด์อิมแพกต์",
			id: "Wild Impact"
		},

		damage: 220,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card