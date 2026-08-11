import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Latios Spirit Link",
		'fr-fr': "Lien Spirituel Latios",
		'es-es': "Vínculo Espiritual de Latios",
		'it-it': "Legame Mentale con Latios",
		'pt-br': "Elo Espiritual de Latios",
		'de-de': "Latios' Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Latios-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Latios-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Latios-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Latios-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Latios-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Latios-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 282753,
		tcgplayer: 98121
	}
}

export default card
