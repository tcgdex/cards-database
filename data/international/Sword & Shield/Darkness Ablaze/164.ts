import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Old PC",
		'fr-fr': "Vieux PC",
		'es-es': "Ordenador Antiguo",
		'it-it': "Vecchio PC",
		'pt-br': "Computador Antigo",
		'de-de': "Alter PC"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip 2 coins. If both are heads, put a card from your discard pile into your hand.",
		'fr-fr': "Lancez 2 pièces. Si les deux sont face, ajoutez une carte de votre pile de défausse à votre main.",
		'es-es': "Lanza 2 monedas. Si ambas son cara, pon 1 carta de tu pila de descartes en tu mano.",
		'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
		'pt-br': "Jogue 2 moedas. Se ambas saírem cara, coloque 1 carta da sua pilha de descarte na sua mão.",
		'de-de': "Wirf 2 Münzen. Zeigen beide Kopf, nimm 1 Karte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483699,
				tcgplayer: 219278
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483699,
				tcgplayer: 219278
			}
		},
	],
}

export default card
