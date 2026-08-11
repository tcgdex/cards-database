import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カルボウ",
		'zh-tw': "炭小侍",
		'id-id': "Charcadet"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	dexId: [935],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
		'zh-tw': "生命寄宿在燃燒的木炭上變成了寶可夢。即使敵人再強， 也會以燃燒的鬥志迎面而戰。",
		'id-id': "Jiwa bersemayam ke dalam arang terbakar, lalu berubah menjadi Pokémon. Dengan semangat bertarung yang membara, Charcadet menantang untuk bertarung meskipun melawan musuh yang kuat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "ヒートブラスト",
			'zh-tw': "高溫爆破",
			'id-id': "Heat Blast"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747571,
				tcgplayer: 567618,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card