import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ボチ"
	},
	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	description: {
		'ja-jp': "人と関わることなく命を落とした野良の犬ポケモンが生まれ変わったと言われている。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "ふむ"
		},
		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'ja-jp': "とっしん"
		},
		damage: 40,
		effect: {
			'ja-jp': "このポケモンにも10ダメージ。"
		},
		cost: ["Psychic", "Colorless"]
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
			type: "normal",
			thirdParty: {
				cardmarket: 840606,
				tcgplayer: 647286,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [971]
}

export default card
