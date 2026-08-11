import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Ampharos Spirit Link",
		'fr-fr': "Lien Spirituel Pharamp",
		'es-es': "Vínculo Espiritual de Ampharos",
		'it-it': "Legame Mentale con Ampharos",
		'pt-br': "Elo Espiritual de Ampharos",
		'de-de': "Ampharos' Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Pharamp-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Ampharos-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Ampharos-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Ampharos-EX.",
		'pt-br': "A sua vez não terminará se o Pokémon ao qual este card está ligado tornar-se M-Ampharos-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Ampharos-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 284251,
		tcgplayer: 101493
	}
}

export default card
