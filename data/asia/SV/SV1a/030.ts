import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウェーニバルex",
		'zh-tw': "狂歡浪舞鴨ex",
		'th-th': "เวนิวัลex",
		'id-id': "Quaquaval ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "エキサイトサンバ",
			'zh-tw': "激動森巴",
			'th-th': "เอ็กซ์ไซต์แซมบา",
			'id-id': "Excite Samba"
		},

		damage: 60,

		effect: {
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。然後，對手將對手自己的戰鬥寶可夢與備戰寶可夢互換。",
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์ หลังจากนั้น ฝ่ายตรงข้ามสลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเองกับโปเกมอนบนเบนช์",
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan. Setelah itu, lawan menukar Pokémon Bertarungnya dengan Pokémon Cadangan."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "スクリューシュート",
			'zh-tw': "螺旋射擊",
			'th-th': "สกรูชูต",
			'id-id': "Screw Shoot"
		},

		damage: 230,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、手札にもどす。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，放回手牌。",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก นำกลับขึ้นมือ",
			'id-id': "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701084,
				tcgplayer: 568153,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card