import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Gardevoir Spirit Link",
		'fr-fr': "Lien Spirituel Gardevoir",
		'es-es': "Vínculo Espiritual de Gardevoir",
		'it-it': "Legame Mentale con Gardevoir",
		'pt-br': "Elo Espiritual de Gardevoir",
		'de-de': "Guardevoirs Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Gardevoir-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Gardevoir-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Gardevoir-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Gardevoir-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Gardevoir-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Guardevoir-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 291550,
		tcgplayer: 121225
	}
}

export default card
