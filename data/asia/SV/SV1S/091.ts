import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ギャラドスex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			'ja-jp': "たきのぼり"
		},

		damage: 100
	}, {
		cost: ["Water", "Water", "Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "タイラントテール"
		},

		damage: "180＋",

		effect: {
			'ja-jp': "相手のバトルポケモンにダメカンがのっているなら、180ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693057,
				tcgplayer: 567208,
			},
		},
	],

	retreat: 4,
}

export default card