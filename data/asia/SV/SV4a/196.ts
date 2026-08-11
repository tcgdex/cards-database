import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ポポッコ",
		'zh-tw': "毽子花",
		'id-id': "Skiploom"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	dexId: [188],
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "ポポッコの マニアは 頭の 花から 漂う 香りで どこで 生まれたか わかるらしい。",
		'zh-tw': "據說熱愛毽子花的人能夠透過牠頭上的花散發的香味， 猜出牠是在哪裡出生的。",
		'id-id': "Kabarnya para pencinta Skiploom dapat mengetahui dari mana asal Pokémon ini dengan mencium wangi bunga di kepalanya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ふわっとよける",
			'zh-tw': "輕飄躲避",
			'id-id': "Mengelit Enteng"
		},

		effect: {
			'ja-jp': "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			'zh-tw': "這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。",
			'id-id': "Saat Pokémon ini menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak menerima kerusakan tersebut."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "はなのかぜ",
			'zh-tw': "花之風",
			'id-id': "Angin Bunga"
		},

		damage: 30,

		effect: {
			'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'id-id': "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747550,
				tcgplayer: 567597,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card