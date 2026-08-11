import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Gyarados Spirit Link",
		'fr-fr': "Lien Spirituel Léviator",
		'es-es': "Vínculo Espiritual de Gyarados",
		'it-it': "Legame Mentale con Gyarados",
		'pt-br': "Elo Espiritual de Gyarados",
		'de-de': "Garados' Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Léviator-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Gyarados-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Gyarados-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Gyarados-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Gyarados-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Garados-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 288276,
		tcgplayer: 111632
	}
}

export default card
