import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Kyogre Spirit Link",
		'fr-fr': "Lien Spirituel Kyogre",
		'es-es': "Vínculo Espiritual de Kyogre",
		'it-it': "Legame Mentale con Kyogre",
		'pt-br': "Elo Espiritual de Kyogre",
		'de-de': "Kyogres Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient Primo-Kyogre-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes Primal Kyogre-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en Kyogre Primigenio-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa Archeo Kyogre-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se Kyogre Primitivo-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu Proto-Kyogre-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 273663,
		tcgplayer: 96030
	}
}

export default card
