import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Venusaur Spirit Link",
		'fr-fr': "Lien Spirituel Florizarre",
		'es-es': "Vínculo Espiritual de Venusaur",
		'it-it': "Legame Mentale con Venusaur",
		'pt-br': "Elo Espiritual de Venusaur",
		'de-de': "Bisaflors Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Florizarre-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Venusaur-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Venusaur-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Venusaur-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Venusaur-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Bisaflor-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 293451,
		tcgplayer: 124102
	}
}

export default card
