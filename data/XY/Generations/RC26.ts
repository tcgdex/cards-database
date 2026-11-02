import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Floral Crown",
		fr: "Couronne Florale",
		de: "Blumenkrone"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "À la fin du tour de votre adversaire, soignez 20 dégâts au Pokémon de base auquel cette carte est attachée.",
		en: "At the end of your opponent's turn, heal 20 damage from the Basic Pokémon this card is attached to.",
		de: "Lege 1 Pokémon-Ausrüstung an 1 deiner Pokémon an, an das noch keine Pokémon-Ausrüstung angelegt ist. Heile am Ende des nächsten Zuges deines Gegners 20 Schadenspunkte bei dem Basis-Pokémon, an das diese Karte angelegt ist. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 288535
	}
}

export default card
