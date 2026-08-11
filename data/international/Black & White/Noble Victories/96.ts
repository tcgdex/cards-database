import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Xtransceiver",
		'fr-fr': "Vokit",
		'es-es': "Videomisor",
		'it-it': "Interpoké",
		'pt-br': "Tranceptor X",
		'de-de': "Viso-Caster"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c’est face, cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'en-us': "Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Lanza una moneda. Si sale cara, busca en tu baraja una carta de Partidario, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Jogue uma moeda. Se sair cara, procure um card de Apoiador em seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Wirf 1 Münze. Durchsuche bei „Kopf“ dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280219,
		tcgplayer: 90674
	}
}

export default card
