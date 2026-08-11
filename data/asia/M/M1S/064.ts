import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ツボツボ"
	},
	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	description: {
		'ja-jp': "ツボのような甲羅の中にためこんだ木の実はいつの間にかドロドロのジュースに変わる"
	},
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "ころがる"
		},
		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840623,
				tcgplayer: 647261,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [213]
}

export default card
