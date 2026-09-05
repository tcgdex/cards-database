import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Glalie Spirit Link",
		fr: "Lien Spirituel Oniglali",
		es: "Vínculo Espiritual de Glalie",
		it: "Legame Mentale con Glalie",
		pt: "Elo Espiritual de Glalie",
		de: "Firnontors Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	cameoDexIds: [362],

	effect: {
		fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Oniglali-EX.",
		en: "Your turn does not end if the Pokémon this card is attached to becomes M Glalie-EX.",
		es: "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Glalie-EX.",
		it: "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Glalie-EX.",
		pt: "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Glalie-EX.",
		de: "Lege 1 Pokémon-Ausrüstung an 1 deiner Pokémon an, an das noch keine Pokémon-Ausrüstung angelegt ist. Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Firnontor-EX wird. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 286385,
		tcgplayer: 107258
	}
}

export default card
