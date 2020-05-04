import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-5",
	localId: 5,

	// Card informations
	name: {
		en: "Roserade",
		fr: "Roserade",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/5/high",
		},
	},

	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Inviting Poison",
			fr: "Poison Tentant",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Poisoned.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Flower Tornado",
			fr: "Floramixeur",
		},
		text: {
			en: "Move any number of Grass Energy from your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant d’Énergies Grass attachées à vos Pokémon que vous le voulez sur vos autres Pokémon, de la manière que vous voulez.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
