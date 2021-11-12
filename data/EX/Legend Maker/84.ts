import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Armaldo ex",
		fr: "Armaldo ex"
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		348,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Anorith",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				fr: "Double armure"
			},
			effect: {
				en: "As long as Armaldo ex has any React Energy cards attached to it, Armaldo ex is both Grass and Fighting type.",
				fr: "Tant qu'Armaldo ex possède des cartes Énergie réaction, il est de type  et ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante"
			},
			effect: {
				en: "Remove 2 damage counters from Armaldo ex.",
				fr: "Retirez à Armaldo ex 2 marqueurs de dégât."
			},
			damage: 40,
		},
		{
			cost: [ 'Fighting', 'Colorless', 'Colorless' ],
			name: { fr: 'Coupe-tourbillon' },
			effect: {
				fr: 'Si le Pokémon Défenseur possède une Résistance, les dégâts de base de cette attaque sont de 100 au lieu de 70.'
			},
			damage: 70
		  }
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
