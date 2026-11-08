import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Lum Berry",
		'fr-fr': "Baie Prine",
		'es-es': "Baya Ziuela",
		'it-it': "Baccaprugna",
		'pt-br': "Fruta Lum",
		'de-de': "Prunusbeere"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "At the end of each turn, if the Pokémon this card is attached to is affected by any Special Conditions, it recovers from all of them, and discard this card.",
		'fr-fr': "À la fin de chaque tour, si le Pokémon auquel cette carte est attachée est affecté par au moins un État Spécial, il guérit de tous ces États Spéciaux. Ensuite, défaussez cette carte.",
		'es-es': "Al final de cada turno, si el Pokémon al que está unida esta carta se ve afectado por alguna Condición Especial, se recupera de todas ellas, y descartas esta carta.",
		'it-it': "Alla fine di ogni turno, se il Pokémon a cui è assegnata questa carta è influenzato da condizioni speciali, ne guarisce. Poi scarta questa carta.",
		'pt-br': "No final de cada turno, se o Pokémon ao qual esta carta está ligada estiver afetado por quaisquer Condições Especiais, ele se recuperará delas, e você descartará esta carta.",
		'de-de': "Am Ende jedes Zuges, wenn das Pokémon, an das diese Karte angelegt ist, von Speziellen Zuständen betroffen ist, erholt es sich von allen und du legst diese Karte auf deinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436934,
		tcgplayer: 208494
	}
}

export default card
