import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマゲタケ",
		'zh-tw': "哎呀球菇",
		th: "ทามาเกะทาเคะ",
		id: "Foongus"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [590],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "モンスターボールの 開発者は タマゲタケが 好きだったという 説が あるが 真偽は 不明。",
		'zh-tw': "據說開發精靈球的人很喜歡哎呀球菇， 但不知是真是假。",
		th: "มีข้อสันนิษฐานว่าผู้คิดค้นมอนสเตอร์บอลนั้นชื่นชอบทามาเกะทาเคะ แต่ความจริงเป็นอย่างไรไม่มีใครรู้",
		id: "Ada teori yang mengatakan pengembang Bola Pokémon menyukai Foongus, namun kebenarannya tidak diketahui."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "もようでつる",
			'zh-tw': "花紋吸睛",
			th: "ล่อด้วยลาย",
			id: "Pola Pemancing"
		},

		effect: {
			ja: "自分の山札からタイプのたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【草】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ประเภท[หญ้า] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Pokémon Basic tipe {Daun} dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊",
			th: "ตี",
			id: "Menghantam"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card