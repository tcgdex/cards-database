import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "フーディン",
		id: "Alakazam",
		th: "ฟูดิน",
		'zh-tw': "胡地",
		'zh-cn': "胡地"
	},

	illustrator: "Masako Tomii",
	rarity: "None",
	category: "Pokemon",
	dexId: [65],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "非常に 高い 知能を 持つ。 生まれてから 死ぬまでの できごとを すべて 覚えている という。",
		id: "Alakazam memiliki kecerdasan yang sangat tinggi. Ada yang mengatakan bahwa Pokémon ini ingat segala kejadian yang terjadi sejak lahir hingga mati.",
		th: "มีสติปัญญาสูงมาก สามารถจำทุกสิ่งที่เกิดขึ้นได้ตั้งแต่เกิดจนเสียชีวิต",
		'zh-tw': "擁有非常高的智商。 據說牠能記住從出生到死 一輩子發生過的所有事情。",
		'zh-cn': "擁有非常高的智商。 據說牠能記住從出生到死 一輩子發生過的所有事情。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ストレンジハック",
			id: "Strange Hack",
			th: "สเตรนจ์แฮก",
			'zh-tw': "奇異駭入",
			'zh-cn': "奇異駭入"
		},

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。相手の場のポケモンにのっているダメカンを好きなだけ選び、相手の場のポケモンに好きなようにのせ替える。",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing. Pilih sesukanya Token Kerusakan yang dimiliki Pokémon di Arena lawan, lalu pindahkan sesukanya ke Pokémon di Arena lawan.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] เลือกตัวนับแดเมจที่วางอยู่บนโปเกมอนบนกระดานฝ่ายตรงข้ามตามจำนวนที่ชอบ ย้ายไปวางที่โปเกมอนบนกระดานฝ่ายตรงข้ามตามชอบ",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。選擇任意數量的對手的場上寶可夢身上放置的傷害指示物，以任意方式改放於對手的場上寶可夢身上。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。選擇任意數量的對手的場上寶可夢身上放置的傷害指示物，以任意方式改放於對手的場上寶可夢身上。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "サイコキネシス",
			id: "Psikis",
			th: "ไซโคคิเนซิส",
			'zh-tw': "精神強念",
			'zh-cn': "精神強念"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
			id: "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan.",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x50",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。",
			'zh-cn': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card