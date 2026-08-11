import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Blastoise Spirit Link",
		'fr-fr': "Lien Spirituel Tortank",
		'es-es': "Vínculo Espiritual de Blastoise",
		'it-it': "Legame Mentale con Blastoise",
		'pt-br': "Elo Espiritual de Blastoise",
		'de-de': "Turtoks Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Tortank-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Blastoise-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Blastoise-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Blastoise-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Blastoise-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Turtok-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 293433,
		tcgplayer: 124086
	}
}

export default card
