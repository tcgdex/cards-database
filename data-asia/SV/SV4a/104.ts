import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "リオル",
		'zh-tw': "利歐路",
		th: "ริโอลุ",
		id: "Riolu"
	},

	illustrator: "chibi",
	rarity: "None",
	category: "Pokemon",
	dexId: [447],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。",
		'zh-tw': "夥伴們之間會透過發出波導來與彼此溝通。 跑步可以跑上一整晚。",
		th: "ใช้คลื่นพลังในการสื่อสารกับพวกเดียวกัน สามารถวิ่งติดต่อกันได้ทั้งคืน",
		id: "Riolu mengeluarkan gelombang aura untuk berkomunikasi dengan kawannya. Pokémon ini dapat terus berlari sepanjang malam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "パンチ",
			'zh-tw': "出拳",
			th: "หมัด",
			id: "Pukulan"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			th: "ประจัญบาน",
			id: "Menyerang"
		},

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746486,
				tcgplayer: 567505,
				cardtrader: 269731,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577355,
			},
		},
	]
}

export default card