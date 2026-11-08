import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi",
		'es-es': "Celebi",
		'it-it': "Celebi",
		'pt-br': "Celebi",
		'de-de': "Celebi"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 80,

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
				'en-us': "Time Spiral",
				'fr-fr': "Spirale Temporelle",
				'es-es': "Espiral Temporal",
				'it-it': "Spirale Temporale",
				'pt-br': "Espiral Temporal",
				'de-de': "Zeitspirale"
			},
			effect: {
				'en-us': "Devolve 1 of your opponent’s evolved Pokémon by removing the highest Stage Evolution card from it. Your opponent shuffles that card into their deck.",
				'fr-fr': "Faites dés-évoluer l’un des Pokémon évolués de votre adversaire en ôtant la carte Évolution de plus haut Niveau. Votre adversaire mélange cette carte avec son deck.",
				'es-es': "Involuciona 1 de los Pokémon evolucionados de tu rival quitándole la carta de Evolución de fase más alta. Tu rival pone esa carta en su baraja y las baraja todas.",
				'it-it': "Annulla l’evoluzione di uno dei Pokémon evoluti del tuo avversario rimuovendone la carta Evoluzione di fase più alta. Il tuo avversario rimischia quella carta nel suo mazzo.",
				'pt-br': "Reverta a evolução de 1 dos Pokémon evoluídos do seu oponente removendo a carta de Evolução de Estágio mais alto sobre ele. Seu oponente embaralha aquela carta no próprio baralho.",
				'de-de': "Rückentwickle 1 entwickeltes Pokémon deines Gegners, indem du die höchste auf jenem Pokémon liegende Entwicklungskarte entfernst. Dein Gegner mischt jene Karte in sein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Mind Bend",
				'fr-fr': "Contrôleur d’Esprit",
				'es-es': "Fusión Mental",
				'it-it': "Fusione Mentale",
				'pt-br': "Dobra Mentes",
				'de-de': "Gedankenverbiegung"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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

	description: {
		'en-us': "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared.",
	},

	thirdParty: {
		cardmarket: 387852,
		tcgplayer: 194920
	}
}

export default card
