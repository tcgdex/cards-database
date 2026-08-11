import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Ultra Recon Squad",
		'fr-fr': "Ultra-Commando",
		'es-es': "Unidad Ultra",
		'it-it': "Ultrapattuglia",
		'pt-br': "Ultraesquadrão de Reconhecimento",
		'de-de': "Ultraforschungsteam"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez jusqu’à 2 cartes Ultra-Chimère de votre main. Piochez 3 cartes pour chaque carte défaussée de cette façon.",
		'en-us': "Discard up to 2 Ultra Beast cards from your hand. Draw 3 cards for each card you discarded in this way.",
		'es-es': "Descarta hasta 2 cartas de Ultraente de tu mano. Roba 3 cartas por cada carta que hayas descartado de esta manera.",
		'it-it': "Scarta fino a due carte Ultracreatura dalla tua mano. Pesca tre carte per ogni carta che hai scartato in questo modo.",
		'pt-br': "Descarte até 2 cartas de Ultracriatura da sua mão. Compre 3 cartas para cada carta descartada desta forma.",
		'de-de': "Lege bis zu 2 Ultrabestien aus deiner Hand auf deinen Ablagestapel. Ziehe 3 Karten für jede auf diese Weise auf deinen Ablagestapel gelegte Karte."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 355642,
		tcgplayer: 165776
	}
}

export default card
