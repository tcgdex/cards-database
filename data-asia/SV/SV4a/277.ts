import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オコリザル",
		'zh-tw': "火爆猴",
		id: "Primeape"
	},

	illustrator: "Scav",
	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [57],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		ja: "マンキー"
	},

	description: {
		ja: "ある研究者の 学説では モンスターボールの 中でも オコリザルは 怒っているらしい。",
		'zh-tw': "某位研究者的學說中提到，即使在精靈球裡， 火爆猴好像也在發怒。",
		id: "Menurut teori dari salah seorang peneliti, tampaknya Primeape juga mengamuk ketika berada di dalam Bola Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "あばれパンチ",
			'zh-tw': "暴亂拳",
			id: "Pukulan Mengamuk"
		},

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},
		damage: 70,
		cost: ["Fighting"]
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
				cardmarket: 747631,
				tcgplayer: 567678,
				cardtrader: 270234,
			},
		},
	]
}

export default card