import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Illumise",
		fr: "Lumivole",
		es: "Illumise",
		it: "Illumise",
		pt: "Illumise",
		de: "Illumise"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		314,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Pheromone Signals",
				fr: "Signaux de Phéromones",
				es: "Señales Feromona",
				it: "Segnali Feromonici",
				pt: "Sinais de Feromônio",
				de: "Pheromon-Signale"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361265
	}
}

export default card
