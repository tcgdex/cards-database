import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Buzzwole",
		'fr-fr': "Mouscoto",
		'es-es': "Buzzwole",
		'it-it': "Buzzwole",
		'pt-br': "Buzzwole",
		'de-de': "Masskito"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		794,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sledgehammer",
				'fr-fr': "Coup de Masse",
				'es-es': "Almádena",
				'it-it': "Colpo di Mazza",
				'pt-br': "Marreta",
				'de-de': "Vorschlaghammer"
			},
			effect: {
				'en-us': "If your opponent has exactly 4 Prize cards remaining, this attack does 90 more damage.",
				'fr-fr': "S’il reste exactement 4 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si a tu rival le quedan exactamente 4 cartas de Premio, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il tuo avversario ha esattamente quattro carte Premio rimanenti, questo attacco infligge 90 danni in più.",
				'pt-br': "Se o seu oponente tiver exatamente 4 cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner genau 4 verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Swing Around",
				'fr-fr': "Balançoire",
				'es-es': "Dar Vueltas",
				'it-it': "Giravolta",
				'pt-br': "Balanço",
				'de-de': "Gegenschwung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A mysterious life-form called an Ultra Beast. Witnesses saw it pulverize a dump truck with a single punch.",
	},

	thirdParty: {
		cardmarket: 355592,
		tcgplayer: 165731
	}
}

export default card
