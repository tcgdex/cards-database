import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキメノコ",
		id: "Froslass",
		th: "ยูกิเมโนโกะ",
		'zh-tw': "雪妖女",
		'zh-cn': "雪妖女"
	},

	illustrator: "mingo",
	rarity: "None",
	category: "Pokemon",
	dexId: [478],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "マイナス５０度の 息を 吹きかけ 凍らせた 獲物を 秘密の 場所に 飾っていると 言われる。",
		id: "Dikatakan bahwa Froslass menghias tempat rahasianya dengan mangsanya yang dibekukan menggunakan embusan napas bersuhu -50 ℃.",
		th: "ว่ากันว่าเอาเหยื่อที่แช่แข็งด้วยการเป่าไอเย็นติดลบ 50 องศาเซลเซียสใส่ไปวางตกแต่งในสถานที่ลับ",
		'zh-tw': "據說會吐出零下５０度的 氣息凍結獵物，然後帶到 秘密的地方裝飾起來。",
		'zh-cn': "據說會吐出零下５０度的 氣息凍結獵物，然後帶到 秘密的地方裝飾起來。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いてつくとばり",
			id: "Tudung Pembeku",
			th: "ฉากกั้นแช่แข็ง",
			'zh-tw': "冰冷之帳",
			'zh-cn': "冰冷之帳"
		},

		effect: {
			ja: "このポケモンがいるかぎり、ポケモンチェックのたび、おたがいの特性を持つポケモン（「ユキメノコ」をのぞく）全員に、それぞれダメカンを1個のせる。",
			id: "Selama Pokémon ini ada di Arena, tiap kali Pokémon Check, letakkan masing-masing sejumlah 1 Token Kerusakan pada semua Pokémon kedua pemain yang memiliki Ability (selain Froslass).",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ ทุกครั้งที่ตรวจสอบโปเกมอน ให้วางตัวนับแดเมจบนโปเกมอนที่มีความสามารถของทั้งสองฝ่ายทุกตัว (ยกเว้น [ยูกิเมโนโกะ]) ตัวละ 1 ตัว",
			'zh-tw': "只要這隻寶可夢在場上，每次寶可夢檢查時，在雙方的擁有特性的所有寶可夢（「雪妖女」除外）身上各放置1個傷害指示物。",
			'zh-cn': "只要這隻寶可夢在場上，每次寶可夢檢查時，在雙方的擁有特性的所有寶可夢（「雪妖女」除外）身上各放置1個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "フロストスマッシュ",
			id: "Frost Smash",
			th: "ฟรอสต์สแมช",
			'zh-tw': "冰霜粉碎",
			'zh-cn': "冰霜粉碎"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card