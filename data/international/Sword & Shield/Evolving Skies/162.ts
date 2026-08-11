import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Switching Cups",
		'fr-fr': "Gobelets d'Échange",
		'es-es': "Cubiletes de Cambio",
		'it-it': "Bicchieri di Scambio",
		'pt-br': "Copos de Substituição",
		'de-de': "Tauschbecher"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Switch a card from your hand with the top card of your deck.",
		'fr-fr': "Échangez une carte de votre main contre la carte du dessus de votre deck.",
		'es-es': "Cambia 1 carta de tu mano por la primera carta de tu baraja.",
		'it-it': "Scambia una carta che hai in mano con la prima carta del tuo mazzo.",
		'pt-br': "Troque 1 carta da sua mão pela carta de cima do seu baralho.",
		'de-de': "Tausche 1 Karte aus deiner Hand gegen die oberste Karte deines Decks aus."
	},

	trainerType: "Item",
	illustrator: "Ryo Ueda",
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574220,
				tcgplayer: 246787
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574220,
				tcgplayer: 246787
			}
		},
	],
}

export default card
