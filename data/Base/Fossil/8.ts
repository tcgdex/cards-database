import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drowzee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Prophecy",
				fr: "Prophétie"
			},
			effect: {
				en: "Look at up to 3 cards from the top of either player's deck and rearrange them as you like.",
				fr: "Regardez jusqu'à 3 cartes du dessus du deck d'un des deux joueurs et réarrangez-les comme bon vous semble."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dark Mind",
				fr: "Sombre-esprit"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 10 dégâts. (Ne pas appliquer la Résistance et la Faiblesse au Pokémon du Banc.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "En fixant son adversaire, il l'assaille avec les attaques Psy Hypnose et Convulsion."
	}
}

export default card
