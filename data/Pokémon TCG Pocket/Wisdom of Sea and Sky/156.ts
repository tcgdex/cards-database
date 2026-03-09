import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Will",
		fr: "Clément"
	},

	illustrator: "GIDORA",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "The next time you flip any number of coins for the effect of an attack, Ability, or Trainer card after using this card on this turn, the first coin flip will definitely be heads.",
		fr: "La prochaine fois que vous lancez des pièces en raison de l'effet d'une attaque, d'un talent ou d'une carte Dresseur après avoir utilisé cette carte pendant ce tour, le premier lancer de pièce sera assurément face."
	},

	trainerType: "Supporter",
	boosters: ["lugia"]
}

export default card