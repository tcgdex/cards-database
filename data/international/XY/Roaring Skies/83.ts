import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Gallade Spirit Link",
		'fr-fr': "Lien Spirituel Gallame",
		'es-es': "Vínculo Espiritual de Gallade",
		'it-it': "Legame Mentale con Gallade",
		'pt-br': "Elo Espiritual de Gallade",
		'de-de': "Galagladis Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Gallame-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Gallade-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Gallade-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Gallade-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Gallade-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Galagladi-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 282751,
		tcgplayer: 98119
	}
}

export default card
