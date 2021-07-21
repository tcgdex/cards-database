import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi",
		es: "Celebi",
		it: "Celebi",
		pt: "Celebi",
		de: "Celebi"
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
				en: "Time Spiral",
				fr: "Spirale Temporelle",
				es: "Espiral Temporal",
				it: "Spirale Temporale",
				pt: "Espiral Temporal",
				de: "Zeitspirale"
			},
			effect: {
				en: "Devolve 1 of your opponent’s evolved Pokémon by removing the highest Stage Evolution card from it. Your opponent shuffles that card into their deck.",
				fr: "Faites dés-évoluer l’un des Pokémon évolués de votre adversaire en ôtant la carte Évolution de plus haut Niveau. Votre adversaire mélange cette carte avec son deck.",
				es: "Involuciona 1 de los Pokémon evolucionados de tu rival quitándole la carta de Evolución de fase más alta. Tu rival pone esa carta en su baraja y las baraja todas.",
				it: "Annulla l’evoluzione di uno dei Pokémon evoluti del tuo avversario rimuovendone la carta Evoluzione di fase più alta. Il tuo avversario rimischia quella carta nel suo mazzo.",
				pt: "Reverta a evolução de 1 dos Pokémon evoluídos do seu oponente removendo a carta de Evolução de Estágio mais alto sobre ele. Seu oponente embaralha aquela carta no próprio baralho.",
				de: "Rückentwickle 1 entwickeltes Pokémon deines Gegners, indem du die höchste auf jenem Pokémon liegende Entwicklungskarte entfernst. Dein Gegner mischt jene Karte in sein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mind Bend",
				fr: "Contrôleur d’Esprit",
				es: "Fusión Mental",
				it: "Fusione Mentale",
				pt: "Dobra Mentes",
				de: "Gedankenverbiegung"
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



}

export default card
