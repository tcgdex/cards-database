import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Steelix Spirit Link",
		'fr-fr': "Lien Spirituel Steelix",
		'es-es': "Vínculo Espiritual de Steelix",
		'it-it': "Legame Mentale con Steelix",
		'pt-br': "Elo Espiritual de Steelix",
		'de-de': "Stahlos' Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Steelix-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Steelix-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Steelix-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Steelix-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Steelix-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Stahlos -EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 291553,
		tcgplayer: 121230
	}
}

export default card
