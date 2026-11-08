import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'es-es': "Dialga",
		'it-it': "Dialga",
		'pt-br': "Dialga",
		'de-de': "Dialga"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 130,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Turn Back Time",
				'fr-fr': "Retour Dans le Temps",
				'es-es': "Vuelta Atrás Cronológica",
				'it-it': "Tempo Inverso",
				'pt-br': "Voltar no Tempo",
				'de-de': "Zeit zurückdrehen"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent’s hand.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en mettant la carte Évolution la plus élevée placée dessus dans la main de votre adversaire.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon evolucionado, involuciónalo poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, annulla la sua evoluzione mettendone la carta Evoluzione di fase più alta nella sua mano.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon evoluído, reverta a sua evolução colocando a carta de Evolução de Estágio mais alta sobre ele na mão do seu oponente.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, rückentwickle es, indem du deinem Gegner die höchste auf jenem Pokémon liegende Entwicklungskarte auf seine Hand gibst."
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Blast",
				'fr-fr': "Violente Déflagration",
				'es-es': "Estallido Vigoroso",
				'it-it': "Forzacolpo",
				'pt-br': "Explosão Poderosa",
				'de-de': "Powerschuss"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
	},

	thirdParty: {
		cardmarket: 365764,
		tcgplayer: 178942
	}
}

export default card
