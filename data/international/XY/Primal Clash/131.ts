import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Groudon Spirit Link",
		'fr-fr': "Lien Spirituel Groudon",
		'es-es': "Vínculo Espiritual de Groudon",
		'it-it': "Legame Mentale con Groudon",
		'pt-br': "Elo Espiritual de Groudon",
		'de-de': "Groudons Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient Primo-Groudon-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes Primal Groudon-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en Groudon Primigenio-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa Archeo Groudon-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se Groudon Primitivo-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu Proto-Groudon-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 273662,
		tcgplayer: 96029
	}
}

export default card
