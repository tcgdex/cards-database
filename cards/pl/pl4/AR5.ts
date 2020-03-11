import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-AR5",
	localId: "AR5",

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR5/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR5/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		name: {
			en: "Ripple Swell",
			fr: "Vague menaçante",
		},
		text: {
			en: "If you have 6 Arceus in play and each of them is a different type, search your deck for up to 6 basic Energy cards. Attach each of those Energy cards to a different Pokémon you have in play. Shuffle your deck afterward.",
			fr: "Si vous avez 6 Arceus en jeu et que chacun de ces Arceus est de type différent, choisissez jusqu'à 6 cartes Énergie de base dans votre deck. Attachez chacune de ces cartes Énergie à un autre Pokémon que vous avez en jeu. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Spear",
			fr: "Lance céleste",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Remove all Energy cards attached to Arceus and put them in the Lost Zone.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Retirez à Arceus toutes ses cartes Énergie et placez-les dans la Zone Perdue.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
