import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Random Receiver",
		'fr-fr': "Récepteur Aléatoire",
		'es-es': "Receptor Aleatorio",
		'it-it': "Destinatario Casuale",
		'pt-br': "Receptor Aleatório",
		'de-de': "Zufallsempfänger"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Montrez des cartes du dessus de votre deck jusqu'à ce que vous montriez une carte Supporter. Ajoutez-la à votre main. Mélangez les autres cartes avec votre deck.",
		'en-us': "Reveal cards from the top of your deck until you reveal a Supporter card. Put it into your hand. Shuffle the other cards back into your deck.",
		'es-es': "Ve enseñando cartas de la parte superior de tu baraja hasta que enseñes 1 carta de Partidario. Ponla en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Scopri le carte in cima al tuo mazzo fino a quando non trovi una carta Aiuto. Aggiungila a quelle che hai in mano, poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Revele os cards de cima do seu baralho até revelar um card de Apoiador. Coloque-o em sua mão. Embaralhe os demais cards de volta.",
		'de-de': "Decke solang Karten von deinem Deck auf, bis du eine Unterstützerkarte aufdeckst. Nimm sie auf deine Hand. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 289929,
		tcgplayer: 117880
	}
}

export default card
