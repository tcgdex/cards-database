import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Recycle Energy",
		'fr-fr': "Énergie Recyclée",
		'es-es': "Energía Reciclaje",
		'it-it': "Energia Riciclo",
		'pt-br': "Energia de Reciclagem",
		'de-de': "Wiederverwertungsenergie"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		'fr-fr': "Cette carte fournit de l’Énergie Colorless.\n\nSi cette carte est défaussée du jeu, placez-la dans votre main plutôt que dans la pile de défausse.",
		'en-us': "This card provides Colorless Energy.\n\nIf this card is discarded from play, put it into your hand instead of the discard pile.",
		'es-es': "Esta carta proporciona 1 Energía Colorless.\n\nSi se descarta esta carta del juego, ponla en tu mano en vez de en la pila de descartes.",
		'it-it': "Questa carta fornisce Energia Colorless.\n\nSe questa carta viene scartata dal gioco, aggiungila a quelle che hai in mano invece che alla pila degli scarti.",
		'pt-br': "Esta carta fornece Energia Colorless.\n\nSe esta carta for descartada do jogo, coloque-a na sua mão ao invés de colocá-la na pilha de descarte.",
		'de-de': "Diese Karte liefert Colorless-Energie.\n\nWenn diese Karte aus dem Spiel genommen wird und auf deinen Ablagestapel gelegt würde, nimm sie stattdessen auf deine Hand."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 388847,
		tcgplayer: 195279
	}
}

export default card
