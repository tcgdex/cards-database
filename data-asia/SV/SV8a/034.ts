import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "オーダイル",
		id: "Feraligatr",
		th: "ออไดล์",
		'zh-tw': "大力鱷",
		'zh-cn': "大力鱷"
	},

	illustrator: "Kurata So",
	rarity: "None",
	category: "Pokemon",
	dexId: [160],
	hp: 180,
	types: ["Water"],

	description: {
		ja: "普段は ゆっくりとした 動きだが 獲物に かみつくときは 目にも 止まらない スピードだ。",
		id: "Biasanya, pergerakan Feraligatr lamban. Namun, kecepatannya saat menggigit mangsa tidak dapat ditangkap oleh mata.",
		th: "โดยปกติแล้วจะขยับตัวช้า ๆ แต่ตอนที่จะเข้ากัดขย้ำเหยื่อนั้นจะรวดเร็วจนมองไม่ทัน",
		'zh-tw': "雖然平時動作慢吞吞的， 但在撲咬獵物的時候， 速度卻快到無法看清。",
		'zh-cn': "雖然平時動作慢吞吞的， 但在撲咬獵物的時候， 速度卻快到無法看清。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "トレントハート",
			id: "Torrent Heart",
			th: "หัวใจไหลเชี่ยว",
			'zh-tw': "奔流之心",
			'zh-cn': "奔流之心"
		},

		effect: {
			ja: "自分の番に1回使える。このポケモンにダメカンを5個のせる。その場合、この番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Letakkan 5 Token Kerusakan pada Pokémon ini. Jika dilakukan, pada giliran ini, kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 120.",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา วางตัวนับแดเมจ 5 ตัวบนโปเกมอนนี้ เมื่อทำเช่นนั้นแล้ว เทิร์นนี้ แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+120]",
			'zh-tw': "在自己的回合時可使用1次。在這隻寶可夢身上放置5個傷害指示物。這個情況下，在這個回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
			'zh-cn': "在自己的回合時可使用1次。在這隻寶可夢身上放置5個傷害指示物。這個情況下，在這個回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "おおなみ",
			id: "Ombak Besar",
			th: "คลื่นลูกใหญ่",
			'zh-tw': "駭浪",
			'zh-cn': "駭浪"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンは「おおなみ」が使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Ombak Besar.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [คลื่นลูกใหญ่] ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「駭浪」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「駭浪」。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card