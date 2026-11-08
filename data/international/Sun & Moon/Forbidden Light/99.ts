import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Furfrou",
		'fr-fr': "Couafarel",
		'es-es': "Furfrou",
		'it-it': "Furfrou",
		'pt-br': "Furfrou",
		'de-de': "Coiffwaff"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		676,
	],

	hp: 90,

	types: [
		"Colorless",
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
				'en-us': "You may draw cards until you have 5 cards in your hand.",
				'fr-fr': "Vous pouvez piocher des cartes jusqu’à ce que vous ayez 5 cartes en main.",
				'es-es': "Puedes robar cartas hasta que tengas 5 cartas en tu mano.",
				'it-it': "Puoi pescare fino ad avere cinque carte in mano.",
				'pt-br': "Você pode comprar cartas até ter 5 cartas na sua mão.",
				'de-de': "Du kannst so lang Karten ziehen, bis du 5 Karten auf deiner Hand hast."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Historically, in the Kalos region, these Pokémon were the designated guardians of the king.",
	},

	thirdParty: {
		cardmarket: 355612,
		tcgplayer: 165761
	}
}

export default card
