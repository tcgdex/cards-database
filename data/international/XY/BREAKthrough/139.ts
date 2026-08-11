import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Glalie Spirit Link",
		'fr-fr': "Lien Spirituel Oniglali",
		'es-es': "Vínculo Espiritual de Glalie",
		'it-it': "Legame Mentale con Glalie",
		'pt-br': "Elo Espiritual de Glalie",
		'de-de': "Firnontors Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Oniglali-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Glalie-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Glalie-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Glalie-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Glalie-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Firnontor-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 286385,
		tcgplayer: 107258
	}
}

export default card
