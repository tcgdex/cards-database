import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'pt-br': "Golett",
		'de-de': "Golbit"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		622,
	],

	hp: 90,

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
				'en-us': "Return",
				'fr-fr': "Retour",
				'es-es': "Retribución",
				'it-it': "Ritorno",
				'pt-br': "Retorno",
				'de-de': "Rückkehr"
			},
			effect: {
				'en-us': "You may draw cards until you have 5 cards in your hand.",
				'fr-fr': "Vous pouvez piocher des cartes jusqu’à ce que vous ayez 5 cartes en main.",
				'es-es': "Puedes robar cartas hasta que tengas 5 cartas en tu mano.",
				'it-it': "Puoi pescare fino ad avere cinque carte in mano.",
				'pt-br': "Você pode comprar cartas até ter 5 cartas na sua mão.",
				'de-de': "Du kannst so lang Karten ziehen, bis du 5 Karten auf deiner Hand hast."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its movements are powered by a mysterious energy. It has continued to move since ancient times, so its power may soon run out.",
	},

	thirdParty: {
		cardmarket: 408089,
		tcgplayer: 201263
	}
}

export default card
