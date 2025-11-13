import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Dark Pendant",
		fr: "Pendentif des Ténèbres"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "If the {D} Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon, your opponent reveals a random card from their hand and shuffles it into their deck.",
		fr: "Si le Pokémon {D} auquel cette carte est attachée est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire, votre adversaire dévoile une carte de sa main et la mélange avec son deck."
	},

	trainerType: "Tool",
	boosters: ["ho-oh"]
}

export default card