import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Lum Berry",
		fr: "Baie Prine",
		es: "Baya Ziuela",
		it: "Baccaprugna",
		pt: "Fruta Lum",
		de: "Prunusbeere"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "At the end of each turn, if the Pokémon this card is attached to is affected by any Special Conditions, it recovers from all of them, and discard this card.",
		fr: "À la fin de chaque tour, si le Pokémon auquel cette carte est attachée est affecté par au moins un État Spécial, il guérit de tous ces États Spéciaux. Ensuite, défaussez cette carte.",
		es: "Al final de cada turno, si el Pokémon al que está unida esta carta se ve afectado por alguna Condición Especial, se recupera de todas ellas, y descartas esta carta.",
		it: "Alla fine di ogni turno, se il Pokémon a cui è assegnata questa carta è influenzato da condizioni speciali, ne guarisce. Poi scarta questa carta.",
		pt: "No final de cada turno, se o Pokémon ao qual esta carta está ligada estiver afetado por quaisquer Condições Especiais, ele se recuperará delas, e você descartará esta carta.",
		de: "Am Ende jedes Zuges, wenn das Pokémon, an das diese Karte angelegt ist, von Speziellen Zuständen betroffen ist, erholt es sich von allen und du legst diese Karte auf deinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "D"
}

export default card
