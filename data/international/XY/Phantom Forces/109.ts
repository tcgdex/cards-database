import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "VS Seeker",
		'fr-fr': "Cherche VS",
		'es-es': "Buscapelea",
		'it-it': "Cercasfide",
		'pt-br': "Explorador VS",
		'de-de': "Kampffahnder"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
		'en-us': "Put a Supporter card from your discard pile into your hand.",
		'es-es': "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
		'it-it': "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		'pt-br': "Coloque um card de Apoiador da sua pilha de descarte em sua mão.",
		'de-de': "Nimm 1 Unterstützerkarte von deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281916,
		tcgplayer: 94677
	}
}

export default card
