import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Noivern BREAK",
		'fr-fr': "Bruyverne TURBO",
		'es-es': "Noivern TURBO",
		'it-it': "Noivern TURBO",
		'pt-br': "Noivern TURBO",
		'de-de': "UHaFnir-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		715,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Noivern",
		'fr-fr': "Bruyverne",
		'es-es': "Noivern",
		'it-it': "Noivern",
		'pt-br': "Noivern",
		'de-de': "UHaFnir"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Synchro Woofer",
				'fr-fr': "Fréquence Synchro",
				'es-es': "Frecuencia Sincronizada",
				'it-it': "Sincrowoofer",
				'pt-br': "Woofer Sincronizado",
				'de-de': "Synchro-Woofer"
			},
			effect: {
				'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
				'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si tienes el mismo número de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
				'it-it': "Se hai lo stesso numero di carte in mano rispetto al tuo avversario, questo attacco infligge 80 danni in più.",
				'pt-br': "Se você tiver o mesmo número de cards em sua mão que seu oponente, este ataque causará 80 de danos adicionais.",
				'de-de': "Wenn du dieselbe Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "70+",

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 286359,
		tcgplayer: 107232
	}
}

export default card
