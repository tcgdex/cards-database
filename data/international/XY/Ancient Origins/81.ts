import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Tyranitar Spirit Link",
		'fr-fr': "Lien Spirituel Tyranocif",
		'es-es': "Vínculo Espiritual de Tyranitar",
		'it-it': "Legame Mentale con Tyranitar",
		'pt-br': "Elo Espiritual de Tyranitar",
		'de-de': "Despotars Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Tyranocif-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Tyranitar-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Tyranitar-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Tyranitar-EX.",
		'pt-br': "A sua vez não terminará se o Pokémon ao qual este card está ligado tornar-se M-Tyranitar-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Despotar-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 284262,
		tcgplayer: 101503
	}
}

export default card
