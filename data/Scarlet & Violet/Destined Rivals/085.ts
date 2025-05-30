import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Chingling",
		fr: "Korillon de la Team Rocket",
		de: "Team Rockets Klingplim",
		it: "Chingling del Team Rocket",
		es: "Chingling del Team Rocket",
		pt: "Chingling da Equipe Rocket",
		'es-mx': "Chingling del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Chiming Commotion",
			fr: "Tapage Tintant",
			de: "Tönender Tumult",
			it: "Tintinnio Frastornante",
			es: "Conmoción Tintineante",
			pt: "Badalo Barulhento",
			'es-mx': "Conmoción Tintineante"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			pt: "Descarte uma carta aleatória da mão do seu oponente.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival."
		}
	}],

	retreat: 0,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card