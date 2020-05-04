import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC5",
	localId: "RC5",

	// Card informations
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},

	hp: 160,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC5/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC5/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC5/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Recall",
			fr: "Récupération",
		},
		text: {
			en: "Choose 1 of this Pokémon's attacks from its previous Evolutions and use it as this attack.",
			fr: "Choisissez l'une des attaques de pré-évolutions de ce Pokémon et utilisez-la en tant que cette attaque.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Combustion Blast",
			fr: "Explo-Combustion",
		},
		text: {
			en: "This Pokémon can't use Combustion Blast during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Explo-Combustion pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
