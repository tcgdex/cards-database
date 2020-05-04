import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-30",
	localId: 30,

	// Card informations
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/30/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/30/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/30/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Distilled Blast",
			fr: "Explosion Distillée",
		},
		text: {
			en: "Reveal the top 7 cards of your deck. This attack does 30 more damage times the amount of Water Energy you find there. Then, shuffle those Energy cards back into your deck and discard the other cards.",
			fr: "Montrez les 7 cartes du dessus de votre deck. Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Water que vous y trouvez. Ensuite, mélangez ces cartes Énergie avec votre deck et défaussez les autres cartes.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
