import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Sceptile Spirit Link",
		'fr-fr': "Lien Spirituel Jungko",
		'es-es': "Vínculo Espiritual de Sceptile",
		'it-it': "Legame Mentale con Sceptile",
		'pt-br': "Elo Espiritual de Sceptile",
		'de-de': "Gewaldros Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Jungko-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Sceptile-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Sceptile-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Sceptile-EX.",
		'pt-br': "A sua vez não terminará se o Pokémon ao qual este card está ligado tornar-se M-Sceptile-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Gewaldro-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 284261,
		tcgplayer: 101502
	}
}

export default card
