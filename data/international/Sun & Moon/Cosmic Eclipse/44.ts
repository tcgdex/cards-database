import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Nasty Plot",
				'fr-fr': "Machination",
				'es-es': "Maquinación",
				'it-it': "Congiura",
				'pt-br': "Trama Maldosa",
				'de-de': "Ränkeschmied"
			},
			effect: {
				'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Claw",
				'fr-fr': "Griffe Taillante",
				'es-es': "Garra Cuchillazo",
				'it-it': "Artigli Laceranti",
				'pt-br': "Garra Cortadora",
				'de-de': "Schlitzende Klaue"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "One Weavile will trip a Sandshrew and flip it over, and then another Weavile will deal the finishing blow with its sharp claws.",
	},

	thirdParty: {
		cardmarket: 398529,
		tcgplayer: 201220
	}
}

export default card
