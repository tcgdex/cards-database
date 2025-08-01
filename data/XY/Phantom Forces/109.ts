import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "VS Seeker",
		fr: "Cherche VS",
		es: "Buscapelea",
		it: "Cercasfide",
		pt: "Explorador VS",
		de: "Kampffahnder"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
		en: "Put a Supporter card from your discard pile into your hand.",
		es: "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
		it: "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		pt: "Coloque um card de Apoiador da sua pilha de descarte em sua mão.",
		de: "Nimm 1 Unterstützerkarte von deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281916
	}
}

export default card
