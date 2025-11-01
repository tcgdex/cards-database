import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Steel Apron",
		fr: "Tablier d'Acier"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "The {M} Pokémon this card is attached to takes −10 damage from attacks from your opponent's Pokémon, recovers from all Special Conditions, and can't be affected by any Special Conditions.",
		fr: "Le Pokémon {M} auquel cette carte est attachée subit − 10 dégâts provenant des attaques des Pokémon de votre adversaire, guérit de tous les États Spéciaux et ne peut être affecté par aucun État Spécial."
	},

	trainerType: "Tool",
	boosters: ["ho-oh"]
}

export default card