import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Noivern BREAK",
		fr: "Bruyverne TURBO",
		es: "Noivern TURBO",
		it: "Noivern TURBO",
		pt: "Noivern TURBO",
		de: "UHaFnir-TURBO"
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
		en: "Noivern",
		fr: "Bruyverne",
		es: "Noivern",
		it: "Noivern",
		pt: "Noivern",
		de: "UHaFnir"
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
				en: "Synchro Woofer",
				fr: "Fréquence Synchro",
				es: "Frecuencia Sincronizada",
				it: "Sincrowoofer",
				pt: "Woofer Sincronizado",
				de: "Synchro-Woofer"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si tienes el mismo número de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
				it: "Se hai lo stesso numero di carte in mano rispetto al tuo avversario, questo attacco infligge 80 danni in più.",
				pt: "Se você tiver o mesmo número de cards em sua mão que seu oponente, este ataque causará 80 de danos adicionais.",
				de: "Wenn du dieselbe Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 80 weitere Schadenspunkte zu."
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
