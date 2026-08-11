import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ガケガニ"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	dexId: [950],
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "はさむ"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'ja-jp': "アドレナハンマー"
		},

		damage: 130,

		effect: {
			'ja-jp': "このポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693054,
				tcgplayer: 567205,
			},
		},
	],

	retreat: 3
}

export default card