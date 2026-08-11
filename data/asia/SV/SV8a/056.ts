import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "テツノイバラex",
		'id-id': "Iron Thorns ex",
		'th-th': "หนามเหล็กex",
		'zh-tw': "鐵荊棘ex",
		'zh-cn': "鐵荊棘ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "イニシャライズ",
			'id-id': "Initialize",
			'th-th': "อินิเชียไลซ์",
			'zh-tw': "初始化",
			'zh-cn': "初始化"
		},

		effect: {
			'ja-jp': "このポケモンがバトル場にいるかぎり、おたがいの場の「ルールを持つポケモン」（「未来」のポケモンをのぞく）の特性は、すべてなくなる。",
			'id-id': "Selama Pokémon ini ada di Arena Bertarung, Pokémon yang memiliki Peraturan (selain Pokémon Futur) di Arena kedua pemain menjadi tidak memiliki Ability.",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ความสามารถของ [โปเกมอนที่มีกฎ] บนกระดานของทั้งสองฝ่าย (ยกเว้นโปเกมอน [อนาคต]) ทั้งหมดจะหายไป",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，雙方場上「擁有規則的寶可夢」（「未來」寶可夢除外）的特性全部消除。",
			'zh-cn': "只要這隻寶可夢在戰鬥場上，雙方場上「擁有規則的寶可夢」（「未來」寶可夢除外）的特性全部消除。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ボルトサイクロン",
			'id-id': "Bolt Cyclone",
			'th-th': "โวลต์ไซโคลน",
			'zh-tw': "伏特旋風",
			'zh-cn': "伏特旋風"
		},

		damage: 140,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu pindahkan ke Pokémon Cadangan.",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 803169,
				tcgplayer: 602413,
			},
		},
	],

	retreat: 4,
	regulationMark: "H"
}

export default card