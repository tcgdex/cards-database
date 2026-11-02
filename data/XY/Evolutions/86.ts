import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Slowbro Spirit Link",
		fr: "Lien Spirituel Flagadoss",
		es: "Vínculo Espiritual de Slowbro",
		it: "Legame Mentale con Slowbro",
		pt: "Elo Espiritual de Slowbro",
		de: "Lahmus' Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	cameoDexIds: [80],

	effect: {
		fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Flagadoss-EX.",
		en: "Your turn does not end if the Pokémon this card is attached to becomes M Slowbro-EX.",
		es: "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Slowbro-EX.",
		it: "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Slowbro-EX.",
		pt: "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Slowbro-EX.",
		de: "Lege 1 Pokémon-Ausrüstung an 1 deiner Pokémon an, an das noch keine Pokémon-Ausrüstung angelegt ist. Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Lahmus-EX wird. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 293448,
		tcgplayer: 124099
	}
}

export default card
