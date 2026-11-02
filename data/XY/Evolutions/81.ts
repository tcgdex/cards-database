import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Pidgeot Spirit Link",
		fr: "Lien Spirituel Roucarnage",
		es: "Vínculo Espiritual de Pidgeot",
		it: "Legame Mentale con Pidgeot",
		pt: "Elo Espiritual de Pidgeot",
		de: "Tauboss' Geistesbund"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	cameoDexIds: [18],

	effect: {
		fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Roucarnage-EX.",
		en: "Your turn does not end if the Pokémon this card is attached to becomes M Pidgeot-EX.",
		es: "Tu turno no termina si el Pokémon al que está unida esta carta se convierte en M-Pidgeot-EX.",
		it: "Il tuo turno non finisce se il Pokémon a cui è assegnata questa carta diventa M Pidgeot-EX.",
		pt: "Sua vez de jogar não terminará se o Pokémon ao qual este card está ligado tornar-se M-Pidgeot-EX.",
		de: "Lege 1 Pokémon-Ausrüstung an 1 deiner Pokémon an, an das noch keine Pokémon-Ausrüstung angelegt ist. Dein Zug endet nicht, wenn das Pokémon, an das diese Karte angelegt ist, zu M-Tauboss-EX wird. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 293443,
		tcgplayer: 124094
	}
}

export default card
