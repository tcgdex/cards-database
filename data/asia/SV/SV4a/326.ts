import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フーディンex",
		'zh-tw': "胡地ex",
		'id-id': "Alakazam ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "マインドジャック",
			'zh-tw': "意志劫持",
			'id-id': "Mind Jack"
		},

		damage: "90+",

		effect: {
			'ja-jp': "相手のベンチポケモンの数×30ダメージ追加。",
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Pokémon Cadangan lawan."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'ja-jp': "ディメンションハンド",
			'zh-tw': "維度之手",
			'id-id': "Dimension Hand"
		},

		damage: 120,

		effect: {
			'ja-jp': "このワザは、このポケモンがベンチにいても使える。",
			'zh-tw': "就算這隻寶可夢在備戰區，這個招式也可使用。",
			'id-id': "Serangan ini dapat digunakan meskipun Pokémon ini ada di Cadangan."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747680,
				tcgplayer: 567726,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card