import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [433],
	set: Set,

	name: {
		'en-us': "Team Rocket's Chingling",
		'fr-fr': "Korillon de la Team Rocket",
		'de-de': "Team Rockets Klingplim",
		'it-it': "Chingling del Team Rocket",
		'es-es': "Chingling del Team Rocket",
		'pt-br': "Chingling da Equipe Rocket",
		'es-mx': "Chingling del Equipo Rocket"
	},


	illustrator: "Mina Nakai",

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Chiming Commotion",
			'fr-fr': "Tapage Tintant",
			'de-de': "Tönender Tumult",
			'it-it': "Tintinnio Frastornante",
			'es-es': "Conmoción Tintineante",
			'pt-br': "Badalo Barulhento",
			'es-mx': "Conmoción Tintineante"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'pt-br': "Descarte uma carta aleatória da mão do seu oponente.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825959,
				tcgplayer: 632895
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825959,
				tcgplayer: 632895
			}
		},
	],
}

export default card
