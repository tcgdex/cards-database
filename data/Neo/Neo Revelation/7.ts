import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Ho-oh",
		fr: "Ho-oh"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Stoke",
				fr: "Crémation"
			},
			effect: {
				en: "You may search your deck for a Energy card and attach it to Ho-oh",
				fr: "Vous pouvez chercher une carte Énergie  et l'attacher à Ho-oh. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Sacred Fire",
				fr: "Feu sacré"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance.",
				fr: "Lancez une pièce. Si c'est face, choisissez un des Pokémon de votre adversaire. Cette attaque inflige 40 dégâts à ce Pokémon. N'appliquez pas la Faiblesse et la Résistance."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],

			name: {
				en: "Dive Bomb",
				fr: "Bombardement"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
			},

			damage: 90
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Selon la légende, ce Pokémon traverse constamment le ciel, porté par ses magnifiques ailes aux couleurs de l'arc-en-ciel."
	}
}

export default card
