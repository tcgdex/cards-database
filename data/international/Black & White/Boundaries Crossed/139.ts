import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Crystal Wall",
		'fr-fr': "Mur de Cristal",
		'es-es': "Escudo de Cristal",
		'it-it': "Scudo di Cristallo",
		'pt-br': "Parede de Cristal",
		'de-de': "Kristallschild"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si cette carte est attachée à Kyurem Noir-EX, ses PV maximum sont de 300.",
		'en-us': "If this card is attached to Black Kyurem-EX, its maximum HP is 300.",
		'es-es': "Si esta carta está unida a Kyurem Negro-EX, sus PV máximos son 300.",
		'it-it': "Se questa carta è assegnata a Kyurem Nero-EX, i suoi PV massimi diventano 300.",
		'pt-br': "Se esse card estiver ligado a Kyurem Preto-EX, seu PS máximo será 300.",
		'de-de': "Wenn diese Karte an ein Schwarzes Kyurem-EX angelegt ist, verfügt es über 300 Grund-KP."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280726,
		tcgplayer: 84522
	}
}

export default card
