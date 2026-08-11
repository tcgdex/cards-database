import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [515],
	set: Set,

	name: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
		'es-es': "Panpour",
		'it-it': "Panpour",
		'pt-br': "Panpour",
		'de-de': "Sodamak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sekio",

	description: {
		'en-us': "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Pry",
			'fr-fr': "Fouineur",
			'de-de': "Herumschnuppern",
			'es-es': "Fisgonear",
			'pt-br': "Bisbilhotar",
			'it-it': "Impiccione"
		},

		damage: 10,

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire dévoile sa main.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'pt-br': "Seu oponente revela a própria mão.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582202,
				tcgplayer: 253211
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582202,
				tcgplayer: 253211
			}
		},
	],
}

export default card
