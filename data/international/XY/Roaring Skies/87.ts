import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Rayquaza Spirit Link",
		'fr-fr': "Lien Spirituel Rayquaza",
		'es-es': "Vínculo Espiritual de Rayquaza",
		'it-it': "Legame Mentale con Rayquaza",
		'pt-br': "Elo Espiritual de Rayquaza",
		'de-de': "Rayquazas Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Rayquaza-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Rayquaza-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Rayquaza-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Rayquaza -EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Rayquaza-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Rayquaza-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 282755,
		tcgplayer: 98123
	}
}

export default card
