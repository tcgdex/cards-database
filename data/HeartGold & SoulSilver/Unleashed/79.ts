import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Life Herb",
		fr: "Herbe sauveuse",
		de: "Lebenskräuter"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c’est face, choisissez l’un de vos Pokémon et retirez à ce dernier jusqu’à 6 marqueurs de dégât. Tous les États Spéciaux de ce Pokémon sont également annulés.",
		en: "Flip a coin. If heads, choose 1 of your Pokémon, and remove all Special Conditions and 6 damage counters from that Pokémon (all if there are less than 6).",
		de: "Wirf eine Münze. Bei \"Kopf\" wähle 1 deiner Pokémon und entferne alle Speziellen Zustände und 6 Schadensmarken vom gewählten Pokémon (alle, falls weniger als 6 auf diesem Pokémon liegen)."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279235,
		tcgplayer: 86733
	}
}

export default card
