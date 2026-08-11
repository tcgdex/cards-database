import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Manectric Spirit Link",
		'fr-fr': "Lien Spirituel Élecsprint",
		'es-es': "Vínculo Espiritual de Manectric",
		'it-it': "Legame Mentale con Manectric",
		'pt-br': "Elo Espiritual de Manectric",
		'de-de': "Voltensos Geistesbund"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Élecsprint-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Manectric-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Manectric-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Manectric-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Manectric-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Voltenso-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281907,
		tcgplayer: 94668
	}
}

export default card
