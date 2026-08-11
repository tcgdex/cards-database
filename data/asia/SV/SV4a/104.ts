import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リオル",
		'zh-tw': "利歐路",
		'th-th': "ริโอลุ",
		'id-id': "Riolu"
	},

	illustrator: "chibi",
	category: "Pokemon",
	dexId: [447],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。",
		'zh-tw': "夥伴們之間會透過發出波導來與彼此溝通。 跑步可以跑上一整晚。",
		'th-th': "ใช้คลื่นพลังในการสื่อสารกับพวกเดียวกัน สามารถวิ่งติดต่อกันได้ทั้งคืน",
		'id-id': "Riolu mengeluarkan gelombang aura untuk berkomunikasi dengan kawannya. Pokémon ini dapat terus berlari sepanjang malam."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "パンチ",
			'zh-tw': "出拳",
			'th-th': "หมัด",
			'id-id': "Pukulan"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'ja-jp': "とつげき",
			'zh-tw': "突擊",
			'th-th': "ประจัญบาน",
			'id-id': "Menyerang"
		},

		damage: 50,

		effect: {
			'ja-jp': "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746486,
				tcgplayer: 567505,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577355,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card