import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [688],

	name: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'es-mx': "Binacle",
		'de-de': "Bithora",
		'it-it': "Binacle",
		'pt-br': "Binacle"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Double Draw",
			'fr-fr': "Double Pioche",
			'es-es': "Roba Doble",
			'es-mx': "Doble Robo",
			'de-de': "Zweifachzug",
			'it-it': "Pescata Doppia",
			'pt-br': "Compra Dupla"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			'de-de': "Ziehe 2 Karten.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'es-mx': "Arañazo",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684334,
				cardmarket: 877456
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684334,
				cardmarket: 877456
			}
		}
	],

}

export default card
