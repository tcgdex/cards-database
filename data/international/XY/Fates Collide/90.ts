import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Alakazam Spirit Link",
		'fr-fr': "Lien Spirituel Alakazam",
		'es-es': "Vínculo Espiritual de Alakazam",
		'it-it': "Legame Mentale con Alakazam",
		'pt-br': "Elo Espiritual de Alakazam",
		'de-de': "Simsalas Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Alakazam-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Alakazam-EX.",
		'es-es': "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Alakazam-EX.",
		'it-it': "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Alakazam-EX.",
		'pt-br': "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Alakazam-EX.",
		'de-de': "Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Simsala-EX wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 289910,
		tcgplayer: 117863
	}
}

export default card
