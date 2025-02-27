import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ベラカス",
		id: "Rabsca",
		th: "เบราคาสุ",
		'zh-tw': "蟲甲聖",
		'zh-cn': "蟲甲聖"
	},

	illustrator: "mingo",
	rarity: "None",
	category: "Pokemon",
	dexId: [954],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "玉の中に 赤ん坊が 眠る。 心地よく 眠れるように 脚で 玉を まわして あやしているのだ。",
		id: "Bayi tertidur di dalam bola Rabsca. Pokémon ini menggelundungkan bola dengan kakinya dan menenangkan bayi tersebut agar dapat tidur nyenyak.",
		th: "มีตัวอ่อนหลับใหลอยู่ภายในลูกบอล ใช้ขาหมุนลูกบอลเพื่อกล่อมให้ตัวอ่อนนอนหลับสบาย",
		'zh-tw': "為了讓在球裡睡覺的寶寶 可以睡得更加香甜，會用腳 轉著球，讓寶寶感到安穩。",
		'zh-cn': "為了讓在球裡睡覺的寶寶 可以睡得更加香甜，會用腳 轉著球，讓寶寶感到安穩。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "スフィアシールド",
			id: "Sphere Shield",
			th: "สเฟียร์ชีลด์",
			'zh-tw': "球形盾牌",
			'zh-cn': "球形盾牌"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のポケモンからワザのダメージや効果を受けない。",
			id: "Selama Pokémon ini ada di Arena, semua Pokémon Cadangan sendiri tidak menerima kerusakan dan efek akibat serangan dari Pokémon lawan.",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢不會受到對手的寶可夢招式的傷害與效果的影響。",
			'zh-cn': "只要這隻寶可夢在場上，自己的所有備戰寶可夢不會受到對手的寶可夢招式的傷害與效果的影響。"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "サイコキネシス",
			id: "Psikis",
			th: "ไซโคคิเนซิส",
			'zh-tw': "精神強念",
			'zh-cn': "精神強念"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan.",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			'zh-cn': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card