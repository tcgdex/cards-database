import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Gyarados Spirit Link",
		fr: "Lien Spirituel Léviator",
		es: "Vínculo Espiritual de Gyarados",
		it: "Legame Mentale con Gyarados",
		pt: "Elo Espiritual de Gyarados",
		de: "Garados' Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	cameoDexIds: [130],

	effect: {
		fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Léviator-EX.",
		en: "Your turn does not end if the Pokémon this card is attached to becomes M Gyarados-EX.",
		es: "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Gyarados-EX.",
		it: "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Gyarados-EX.",
		pt: "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Gyarados-EX.",
		de: "Lege 1 Pokémon-Ausrüstung an 1 deiner Pokémon an, an das noch keine Pokémon-Ausrüstung angelegt ist. Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Garados-EX wird. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 288276,
		tcgplayer: 111632
	}
}

export default card
