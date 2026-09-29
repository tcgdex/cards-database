import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Paradise Resort",
		fr: "Hôtel « Au paradis des Pokémon »",
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Trainer",
	trainerType: "Stadium",

	effect: {
		en: "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is {C} less.",
		fr: "Le Coût de Retraite de chacun des Psykokwak en jeu (les vôtres et ceux de votre adversaire) est diminué de {C}."
	},
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 903686,
				tcgplayer: 714597
			}
		},
		{
			type: "holo",
			stamp: ["staff"],
			thirdParty: {
				tcgplayer: 714598
			}
		}
	],
}

export default card
