import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'es-mx': "Binacle",
		'de-de': "Bithora",
		'it-it': "Binacle",
		'pt-br': "Binacle"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [688],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Double Draw",
			'fr-fr': "Double Pioche",
			'es-es': "Roba Doble",
			'it-it': "Pescata Doppia",
			'pt-br': "Compra Dupla",
			'de-de': "Zweifachzug"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
		},

	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 30

	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 898177,
				tcgplayer: 706131
			}
		},
	],
}

export default card
