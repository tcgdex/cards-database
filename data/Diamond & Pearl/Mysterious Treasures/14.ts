import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Mesprit",
		fr: "Créfollet"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		481,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Upper Material",
				fr: "Matériel stimulant"
			},
			effect: {
				en: "If you have Uxie and Azelf in play, the Retreat Cost for each Uxie, Mesprit, and Azelf (both yours and your opponent's) is 0.",
				fr: "Si vous avez Créhelf et Créfadet en jeu, le Coût de retraite pour chaque Créhelf, Créfollet et Créfadet (les vôtres et ceux de votre adversaire) est de 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Teleportation Burst",
				fr: "Téléportation explosive"
			},
			effect: {
				en: "You may switch Mesprit with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Créfollet avec 1 des Pokémon de votre Banc."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		fr: "On l'appelle \"être de l'émotion\". Il enseigne aux hommes la beauté de la tristesse, la douleur et la joie."
	}
}

export default card
