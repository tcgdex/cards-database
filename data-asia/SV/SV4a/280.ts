import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "リオル",
		'zh-tw': "利歐路",
		id: "Riolu"
	},

	illustrator: "sowsow",
	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [447],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。",
		'zh-tw': "夥伴們之間會透過發出波導來與彼此溝通。 跑步可以跑上一整晚。",
		id: "Riolu mengeluarkan gelombang aura untuk berkomunikasi dengan kawannya. Pokémon ini dapat terus berlari sepanjang malam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "パンチ",
			'zh-tw': "出拳",
			id: "Pukulan"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			id: "Menyerang"
		},

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
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
			type: "holo",
			thirdParty: {
				cardmarket: 747634,
				tcgplayer: 567681,
				cardtrader: 270237,
			},
		},
	]
}

export default card