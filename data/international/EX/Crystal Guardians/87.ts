import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1).",
		fr: "Retirez 2 marqueurs de dégât à 1 de vos Pokémon (retirez-en 1 si ce Pokémon n'en a qu'1).",
		de: "Entferne 2 Schadensmarken von 1 deiner Pokémon (1, falls dieses Pokémon nur 1 hat)."
	},

	thirdParty: {
		cardmarket: 277168,
		tcgplayer: 88341
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
