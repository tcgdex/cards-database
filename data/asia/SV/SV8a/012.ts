import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アノホラグサ",
		'id-id': "Brambleghast",
		'th-th': "อาโนะโฮรากุสะ",
		'zh-tw': "怖納噬草",
		'zh-cn': "怖納噬草"
	},

	illustrator: "otumami",
	rarity: "None",
	category: "Pokemon",
	dexId: [947],
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "乾燥地帯を 放浪する。 ごくまれに 大量発生して 町ひとつを 埋めつくしてしまう。",
		'id-id': "Brambleghast berkelana di wilayah gersang. Terkadang Pokémon ini bermunculan dalam jumlah besar dan mengubur sebuah kota.",
		'th-th': "เคลื่อนไปอย่างไร้จุดหมายในพื้นที่แห้งแล้ง นาน ๆ ทีจะปรากฏตัวขึ้นมาเป็นจำนวนมากจนกลืนหมู่บ้านทั้งหมู่บ้านหายไป",
		'zh-tw': "會在乾燥地帶流浪。 有極低的機率會大量出現， 把一整座城鎮塞得滿滿滿。",
		'zh-cn': "會在乾燥地帶流浪。 有極低的機率會大量出現， 把一整座城鎮塞得滿滿滿。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ざっそうだましい",
			'id-id': "Jiwa Tangguh",
			'th-th': "จิตวิญญาณแห่งวัชพืช",
			'zh-tw': "雜草魂",
			'zh-cn': "雜草魂"
		},

		effect: {
			'ja-jp': "相手がすでにとったサイド1枚につき、このポケモンの最大HPは「＋50」される。",
			'id-id': "HP maksimal Pokémon ini bertambah sejumlah 50 untuk tiap 1 lembar Kartu Point yang telah diambil lawan.",
			'th-th': "HP สูงสุดของโปเกมอนนี้จะถูก [+50] ต่อการ์ดรางวัล 1 ใบที่ฝ่ายตรงข้ามหยิบไปแล้ว",
			'zh-tw': "這隻寶可夢的最大HP，依對手已經獲得的獎賞卡每1張「+50」。",
			'zh-cn': "這隻寶可夢的最大HP，依對手已經獲得的獎賞卡每1張「+50」。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "パワフルニードル",
			'id-id': "Powerful Needle",
			'th-th': "พาวเวอร์ฟูลนีดเดิ้ล",
			'zh-tw': "強力尖刺",
			'zh-cn': "強力尖刺"
		},

		damage: "80×",

		effect: {
			'ja-jp': "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。",
			'id-id': "Lempar koin untuk tiap Energi yang dikenakan pada Pokémon ini. Serangan ini memberikan kerusakan sejumlah 80 untuk tiap lemparan dengan hasil sisi depan.",
			'th-th': "ทอยเหรียญตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x80",
			'zh-tw': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×80點傷害。",
			'zh-cn': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×80點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803125,
				tcgplayer: 602339,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604511,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602340,
			},
		},
	],

	retreat: 3,
	regulationMark: "H"
}

export default card