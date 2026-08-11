import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Houndoom Spirit Link",
		'fr-fr': "Lien Spirituel Démolosse",
		'es-es': "Vínculo Espiritual de Houndoom",
		'it-it': "Legame Mentale con Houndoom",
		'pt-br': "Elo Espiritual de Houndoom",
		'de-de': "Hundemons Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Démolosse-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Houndoom-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Houndoom-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Houndoom-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Houndoom-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Hundemon-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 286388,
		tcgplayer: 107261
	}
}

export default card
