import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Crystal Wall",
		fr: "Mur de Cristal",
		es: "Escudo de Cristal",
		it: "Scudo di Cristallo",
		pt: "Parede de Cristal",
		de: "Kristallschild"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Si cette carte est attachée à Kyurem Noir-EX, ses PV maximum sont de 300.",
		en: "If this card is attached to Black Kyurem-EX, its maximum HP is 300.",
		es: "Si esta carta está unida a Kyurem Negro-EX, sus PV máximos son 300.",
		it: "Se questa carta è assegnata a Kyurem Nero-EX, i suoi PV massimi diventano 300.",
		pt: "Se esse card estiver ligado a Kyurem Preto-EX, seu PS máximo será 300.",
		de: "Dein Deck darf nicht mehr als 1 ASS-KLASSE-Karte enthalten. Wenn diese Karte an Schwarzes Kyurem-EX angelegt ist, verfügt es über 300 Grund-KP. Lege 1 Pokémon-Ausrüstung an 1 deiner Pokémon an, an das noch keine Pokémon-Ausrüstung angelegt ist. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280726,
		tcgplayer: 84522
	}
}

export default card
