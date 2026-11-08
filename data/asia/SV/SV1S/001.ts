import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "サボネア",
		'zh-tw': "刺球仙人掌",
		'th-th': "ซาโบเนีย",
		'id-id': "Cacnea"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [331],
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "砂漠などの 過酷な 環境を 好む。 体内に 蓄えた 水で ３０日間 生きられる。",
		'zh-tw': "喜歡沙漠等嚴酷環境。能靠體內儲存的水分 存活３０天。",
		'th-th': "ชอบอยู่ในสภาพแวดล้อมที่โหดร้าย เช่น ทะเลทราย น้ำที่สะสมในร่างกายสามารถหล่อเลี้ยงชีวิตให้อยู่ได้ 30 วัน",
		'id-id': "Cacnea menyukai lingkungan yang keras seperti padang pasir dan lainnya. Pokémon ini dapat hidup selama 30 hari hanya dengan air yang ditampung di dalam tubuhnya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "はんげきばり",
			'zh-tw': "反擊針",
			'th-th': "หนามโต้กลับ",
			'id-id': "Jarum Serangan Balasan"
		},

		effect: {
			'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			'th-th': "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 3 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			'id-id': "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "なぐる",
			'zh-tw': "打擊",
			'th-th': "ทุบตี",
			'id-id': "Memukul"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692967,
				tcgplayer: 567118,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card