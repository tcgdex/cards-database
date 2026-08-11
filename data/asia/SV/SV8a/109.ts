import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒトツキ",
		'id-id': "Honedge",
		'th-th': "ฮิโตทซึกิ",
		'zh-tw': "獨劍鞘",
		'zh-cn': "獨劍鞘"
	},

	illustrator: "Nagomi Nijo",
	rarity: "None",
	category: "Pokemon",
	dexId: [679],
	hp: 60,
	types: ["Metal"],

	description: {
		'ja-jp': "剣の 鍔の 青い 目玉が ヒトツキの 本体。 古びた 布で 人の 生気を 吸い取る。",
		'id-id': "Tubuh asli Honedge adalah bola mata biru di gagang pedang. Pokémon ini mengisap vitalitas manusia menggunakan kain tuanya.",
		'th-th': "ตาสีฟ้าบนกระบังดาบคือตัวจริงของฮิโตทซึกิ ดูดเอาพลังชีวิตของคนไปด้วยผ้าเก่า ๆ",
		'zh-tw': "獨劍鞘護手上的 藍色眼珠是牠的本體。 會用陳舊的布吸取人類的精氣。",
		'zh-cn': "獨劍鞘護手上的 藍色眼珠是牠的本體。 會用陳舊的布吸取人類的精氣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'ja-jp': "とつげき",
			'id-id': "Menyerang",
			'th-th': "ประจัญบาน",
			'zh-tw': "突擊",
			'zh-cn': "突擊"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10.",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'zh-cn': "這隻寶可夢也受到10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803222,
				tcgplayer: 602506,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604581,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602507,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card