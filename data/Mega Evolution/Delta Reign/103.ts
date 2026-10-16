import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Zinnia's Trust",
		fr: "Confiance d'Amaryllis"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, move an Energy from the Pokémon you moved to your Bench to the new Active Pokémon.",
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, déplacez une Énergie du Pokémon que vous avez envoyé sur votre Banc vers le nouveau Pokémon Actif."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
