import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガラティアスex"
	},
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "ひるがえす"
		},
		damage: 40,
		effect: {
			'ja-jp': "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			'ja-jp': "ミラージュインパルス"
		},
		damage: 300,
		effect: {
			'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。"
		},
		cost: ["Fire", "Psychic", "Colorless"]
	}],
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840608,
				tcgplayer: 647215,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
	dexId: [380]
}

export default card
