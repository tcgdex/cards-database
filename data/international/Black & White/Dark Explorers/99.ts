import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Random Receiver",
		'fr-fr': "Récepteur Aléatoire",
		'es-es': "Receptor Aleatorio",
		'it-it': "Destinatario Casuale",
		'pt-br': "Receptor Aleatório",
		'de-de': "Zufallsempfänger"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Reveal cards from the top of your deck until you reveal a Supporter card. Put it into your hand. Shuffle the other cards back into your deck.",
		'fr-fr': "Montrez des cartes du dessus de votre deck jusqu’à ce que vous montriez une carte Supporter. Ajoutez-la à votre main. Mélangez les autres cartes avec votre deck.",
		'es-es': "Ve enseñando cartas de la parte superior de tu baraja hasta que enseñes una carta de Partidario. Ponla en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Scopri le carte in cima al tuo mazzo fino a quando non trovi una carta Aiuto. Aggiungila a quelle che hai in mano, poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Revele os cards de cima do seu baralho até revelar um card de Apoiador. Coloque-o em sua mão. Embaralhe os demais cards de volta.",
		'de-de': "Decke solang Karten von deinem Deck auf, bis du eine Unterstützerkarte aufdeckst. Nimm sie auf deine Hand. Mische die anderen Karten zurück in dein Deck."
	},

	thirdParty: {
		cardmarket: 280427,
		tcgplayer: 88573
	}
}

export default card
