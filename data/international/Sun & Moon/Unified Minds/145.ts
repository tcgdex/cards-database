import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'it-it': "Dedenne",
		'pt-br': "Dedenne",
		'de-de': "Dedenne"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		702,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'en-us': "You may draw cards until you have 6 cards in your hand.",
				'fr-fr': "Vous pouvez piocher des cartes jusqu’à ce que vous ayez 6 cartes en main.",
				'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				'it-it': "Puoi pescare fino ad avere sei carte in mano.",
				'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão.",
				'de-de': "Du kannst so lang Karten ziehen, bis du 6 Karten auf deiner Hand hast."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It sneaks into people's homes and steals electricity from their outlets. When your electric bill seems off, it's the handiwork of this rascal.",
	},

	thirdParty: {
		cardmarket: 388522,
		tcgplayer: 195132
	}
}

export default card
