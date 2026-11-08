import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Charizard Spirit Link",
		'fr-fr': "Lien Spirituel Dracaufeu",
		'es-es': "Vínculo Espiritual de Charizard",
		'it-it': "Legame Mentale con Charizard",
		'pt-br': "Elo Espiritual de Charizard",
		'de-de': "Gluraks Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Dracaufeu-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Charizard-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Charizard-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Charizard-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Charizard-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Glurak-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 293435,
		tcgplayer: 124088
	}
}

export default card
