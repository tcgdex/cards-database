import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Audino Spirit Link",
		'fr-fr': "Lien Spirituel Nanméouïe",
		'es-es': "Vínculo Espiritual de Audino",
		'it-it': "Legame Mentale con Audino",
		'pt-br': "Elo Espiritual de Audino",
		'de-de': "Ohrdochs Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Nanméouïe-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Audino-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Audino-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Audino-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Audino-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Ohrdoch-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 289912,
		tcgplayer: 117865
	}
}

export default card
