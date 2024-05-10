import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ケッキング",
		'zh-tw': "請假王",
		th: "เค็คคิง",
		id: "Slaking"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [289],
	hp: 180,
	types: ["Colorless"],

	description: {
		ja: "世界一の ぐうたらだが 溜まった エネルギーを 一気に 出すことで 恐ろしい パワーを 発揮する。",
		'zh-tw': "雖然是世界上最懶散的寶可夢，但能藉由把積蓄的能量一次釋放， 發揮出驚人的力量。",
		th: "เป็นโปเกมอนที่เอื่อยเฉื่อยที่สุดในโลก แต่จะแสดงพลังอันน่ากลัวให้เห็นโดยการปล่อยพลังงานที่เก็บสะสมไว้ออกมาหมดในทีเดียว",
		id: "Slaking paling malas sedunia, tapi dengan mengeluarkan sekaligus energi yang telah dihimpun olehnya, Pokémon ini mengeluarkan kekuatan yang menakutkan."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "にどね",
			'zh-tw': "回籠覺",
			th: "นอนต่อรอบสอง",
			id: "Tidur Lagi"
		},

		effect: {
			ja: "ポケモンチェックのとき、このポケモンのねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。",
			'zh-tw': "在寶可夢檢查時，因這隻寶可夢的【睡眠】的擲硬幣次數改為2次，若沒有全部為正面則無法恢復。",
			th: "ตอนตรวจสอบโปเกมอน จำนวนครั้งที่ต้องทอยเหรียญเมื่อโปเกมอนนี้เป็นสภาวะ[หลับ]จะเป็น 2 ครั้ง ถ้าไม่ออกหัวทั้งหมดจะไม่หายจากสภาวะ[หลับ]",
			id: "Saat Pokémon Check, jumlah lemparan koin yang harus dilakukan akibat kondisi Tidur Pokémon ini menjadi 2 kali dan kondisi ini tidak pulih jika semuanya bukan sisi depan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ぐうたらヘッドバット",
			'zh-tw': "懶散頭撞",
			th: "เฮดบัตเอื่อยเฉื่อย",
			id: "Sundulan Pemalas"
		},

		damage: 240,

		effect: {
			ja: "このポケモンをねむりにする。",
			'zh-tw': "將這隻寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนนี้เป็นสภาวะ[หลับ]",
			id: "Ubah kondisi Pokémon ini menjadi Tidur."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card