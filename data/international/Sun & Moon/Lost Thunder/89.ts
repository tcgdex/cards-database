import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali",
		'es-es': "Espeon",
		'it-it': "Espeon",
		'pt-br': "Espeon",
		'de-de': "Psiana"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Allure",
				'fr-fr': "Allure",
				'es-es': "Atractivo",
				'it-it': "Affascinante",
				'pt-br': "Fascinar",
				'de-de': "Verlockung"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'es-es': "Roba 3 cartas.",
				'it-it': "Pesca tre carte.",
				'pt-br': "Compre 3 cartas.",
				'de-de': "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Crush",
				'fr-fr': "Écras’Énergie",
				'es-es': "Comprimir Energía",
				'it-it': "Sgretolenergia",
				'pt-br': "Esmagamento de Energia",
				'de-de': "Zermalmende Energie"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Energy attached to all of your opponent’s Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées aux Pokémon de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida a todos los Pokémon de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai Pokémon del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada a todos os Pokémon do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an alle Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It unleashes psychic power from the orb on its forehead. When its power is exhausted, the orb grows dull and dark.",
	},

	thirdParty: {
		cardmarket: 365726,
		tcgplayer: 178900
	}
}

export default card
