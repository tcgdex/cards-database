import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジラーチ",
		id: "Jirachi",
		th: "จิราชิ",
		'zh-tw': "基拉祈",
		'zh-cn': "基拉祈"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	dexId: [385],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "１０００年間で ７日だけ 目を 覚まし どんな 願い事でも かなえる 力を 使うという。",
		id: "Dikatakan bahwa Jirachi bangun hanya 7 hari dalam 1000 tahun dan menggunakan kekuatan yang dapat mewujudkan harapan apa pun.",
		th: "กล่าวกันว่าใน 1000 ปี มันจะลืมตาตื่นขึ้นมาเพียงแค่ 7 วัน และใช้พลังทำให้คำอธิษฐานใด ๆ เป็นจริงได้",
		'zh-tw': "據說牠在１０００年之中 只有７天時間會醒過來， 使用能實現任何願望的力量。",
		'zh-cn': "據說牠在１０００年之中 只有７天時間會醒過來， 使用能實現任何願望的力量。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ステラヴェール",
			id: "Tudung Bintang",
			th: "ม่านดาวจรัสแสง",
			'zh-tw': "恆星之幕",
			'zh-cn': "恆星之幕"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のたねポケモンが使うワザの効果で、ダメカンがのらない。",
			id: "Selama Pokémon ini ada di Arena, semua Pokémon Cadangan sendiri tidak menerima efek untuk meletakkan Token Kerusakan akibat serangan yang digunakan oleh Pokémon Basic lawan.",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว จะไม่ถูกวางตัวนับแดเมจ ด้วยเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอน[พื้นฐาน]ฝ่ายตรงข้ามใช้",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢，不會因對手的【基礎】寶可夢使用招式的效果而被放置傷害指示物。",
			'zh-cn': "只要這隻寶可夢在場上，自己的所有備戰寶可夢，不會因對手的【基礎】寶可夢使用招式的效果而被放置傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エネチャージ",
			id: "Energy Charge",
			th: "เอนเนอร์จี้ชาร์จ",
			'zh-tw': "蓄能量",
			'zh-cn': "蓄能量"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card