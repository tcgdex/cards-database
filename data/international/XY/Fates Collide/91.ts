import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Altaria Spirit Link",
		'fr-fr': "Lien Spirituel Altaria",
		'es-es': "Vínculo Espiritual de Altaria",
		'it-it': "Legame Mentale con Altaria",
		'pt-br': "Elo Espiritual de Altaria",
		'de-de': "Altarias Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Altaria-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Altaria-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Altaria-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Altaria-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Altaria-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Altaria-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 289911,
		tcgplayer: 117864
	}
}

export default card
