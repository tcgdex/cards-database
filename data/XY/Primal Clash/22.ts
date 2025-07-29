import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Grass Fire",
				fr: "Feu de Brousse",
				es: "Quemaplantas",
				it: "Fuoco d'Erba",
				pt: "Fogo de Grama",
				de: "Pflanzenbrand"
			},
			effect: {
				en: "Discard a Grass Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie Grass attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Grass unida al Pokémon Activo de tu rival.",
				it: "Scarta un'Energia Grass assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia Grass ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Grass-Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 273553
	}
}

export default card
