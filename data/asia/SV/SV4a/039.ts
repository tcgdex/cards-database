import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スターミー",
		'zh-tw': "寶石海星",
		'th-th': "สตาร์มี",
		'id-id': "Starmie"
	},

	illustrator: "Arai Kiriko",
	category: "Pokemon",
	dexId: [121],
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "体を 高速で 回転させ 海を 泳ぎながら 小さな プランクトンを 吸収する。",
		'zh-tw': "會高速旋轉著身體在海裡游泳，並且同時 吸食微小的浮游生物。",
		'th-th': "หมุนตัวด้วยความเร็วสูงว่ายน้ำในทะเลไปพร้อมกับดูดกินแพลงก์ตอนตัวเล็ก ๆ ไปด้วย",
		'id-id': "Starmie memutar tubuhnya dengan kecepatan tinggi dan mengisap plankton kecil sambil berenang di laut."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "なぞのすいせい",
			'zh-tw': "謎之水性",
			'th-th': "ดาวหางปริศนา",
			'id-id': "Komet Misterius"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。相手のポケモン1匹に、ダメカンを2個のせる。その後、このポケモンと、ついているすべてのカードを、トラッシュする。",
			'zh-tw': "在自己的回合時可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。然後，將這隻寶可夢與附加的卡全部丟棄。",
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา วางตัวนับแดเมจ 2 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว หลังจากนั้น ทิ้งโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Letakkan 2 Token Kerusakan pada 1 Pokémon lawan. Setelah itu, buang Pokémon ini dan semua kartu yang dikenakannya ke Trash."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "スピードアタック",
			'zh-tw': "高速攻擊",
			'th-th': "สปีดแอทแทก",
			'id-id': "Speed Attack"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746407,
				tcgplayer: 567402,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card