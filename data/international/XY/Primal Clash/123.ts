import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Aggron Spirit Link",
		'fr-fr': "Lien Spirituel Galeking",
		'es-es': "Vínculo Espiritual de Aggron",
		'it-it': "Legame Mentale con Aggron",
		'pt-br': "Elo Espiritual de Aggron",
		'de-de': "Stolloss' Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Galeking-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Aggron-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Aggron-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Aggron-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Aggron-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Stolloss-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 273654,
		tcgplayer: 96063
	}
}

export default card
