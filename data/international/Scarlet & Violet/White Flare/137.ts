import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [510],
	set: Set,

	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus",
		'de-de': "Kleoparda",
		'it-it': "Liepard",
		'pt-br': "Liepard",
		'es-es': "Liepard",
		'es-mx': "Liepard"
	},

	illustrator: "matazo",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'de-de': "Felilou",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'es-es': "Purrloin",
		'es-mx': "Purrloin"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Knock Off",
			'fr-fr': "Sabotage",
			'de-de': "Abschlag",
			'it-it': "Privazione",
			'pt-br': "Derrubar",
			'es-es': "Desarme",
			'es-mx': "Desarme"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Descarte uma carta aleatória da mão do seu oponente.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836159,
				tcgplayer: 642250
			}
		},
	],
}

export default card
