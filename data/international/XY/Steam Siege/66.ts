import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Yveltal BREAK",
		'fr-fr': "Yveltal TURBO",
		'es-es': "Yveltal TURBO",
		'it-it': "Yveltal TURBO",
		'pt-br': "Yveltal TURBO",
		'de-de': "Yveltal-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Baleful Night",
				'fr-fr': "Nuit Maléfique",
				'es-es': "Noche Siniestra",
				'it-it': "Malevola Notte",
				'pt-br': "Noite Desastrosa",
				'de-de': "Unheilvolle Nacht"
			},
			effect: {
				'en-us': "This attack does 30 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a ciascun Pokémon nella panchina del tuo avversario che abbia dei segnalini danno. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de danos a cada um dos Pokémon no Banco do seu oponente que já possui contadores de danos. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 291480,
		tcgplayer: 121195
	}
}

export default card
