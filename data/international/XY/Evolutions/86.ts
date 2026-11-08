import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Slowbro Spirit Link",
		'fr-fr': "Lien Spirituel Flagadoss",
		'es-es': "Vínculo Espiritual de Slowbro",
		'it-it': "Legame Mentale con Slowbro",
		'pt-br': "Elo Espiritual de Slowbro",
		'de-de': "Lahmus' Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Flagadoss-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Slowbro-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Slowbro-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Slowbro-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Slowbro-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Lahmus-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 293448,
		tcgplayer: 124099
	}
}

export default card
