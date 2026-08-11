import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [510],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Purrloin"
	},

	description: {
		'en-us': "Don't be fooled by its gorgeous fur and elegant\nfigure. This is a moody and vicious Pokémon.",
		'fr-fr': "On se laisse facilement éblouir par son pelage magnifique et son allure élégante, mais gare à son caractère imprévisible et agressif."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slashing Claw",
			'fr-fr': "Griffe Taillante"
		},

		damage: 70,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card