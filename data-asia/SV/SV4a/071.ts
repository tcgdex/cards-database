import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミライドンex",
		'zh-tw': "密勒頓ex",
		th: "มิไรดอนex",
		id: "Miraidon ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "タンデムユニット",
			'zh-tw': "串聯裝置",
			th: "แทนเดมยูนิต",
			id: "Tandem Unit"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札からタイプのたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇最多2張【雷】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดโปเกมอน[พื้นฐาน]ประเภท[สายฟ้า]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih paling banyak 2 lembar Pokémon Basic tipe {Listrik} dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "フォトンブラスター",
			'zh-tw': "光子引爆",
			th: "โฟตอนบลาสเตอร์",
			id: "Photon Blaster"
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
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card