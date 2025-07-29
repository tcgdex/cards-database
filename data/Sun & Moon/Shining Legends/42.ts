import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shining Jirachi",
		fr: "Jirachi Brillant",
		es: "Jirachi Luminoso",
		it: "Jirachi iridescente",
		pt: "Jirachi Luminescente",
		de: "Schimmerndes Jirachi"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Stellar Reign",
				fr: "Règne Stellaire",
				es: "Reino Estelar",
				it: "Regno Stellare",
				pt: "Reino Estelar",
				de: "Sternenherrschaft"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an evolved Pokémon, devolve it by putting all of the Evolution cards on it into your opponent’s hand.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en mettant toutes les cartes Évolution placées dessus dans la main de votre adversaire.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon evolucionado, involuciónalo poniendo todas las cartas de Evolución que tenga sobre él en la mano de tu rival.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, annulla la sua evoluzione mettendone tutte le carte Evoluzione nella sua mano.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon evoluído, reverta a sua evolução colocando todas as cartas de Evolução sobre ele na mão do seu oponente.",
				de: "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, rückentwickle es, indem du deinem Gegner alle auf jenem Pokémon liegenden Entwicklungskarten auf seine Hand gibst."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 302180
	}
}

export default card
