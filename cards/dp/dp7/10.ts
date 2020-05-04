import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-10",
	localId: 10,

	// Card informations
	name: {
		en: "Sceptile",
		fr: "Sceptile",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/10/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/10/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/10/high",
		},
	},

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Suwama Chiaki",

	abilities: [{
		id: 242,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Trans",
			fr: "Transfert d'énergie",
		},
		text: {
			en: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Sceptile is affected by a Special Condition.",
			fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), déplacez une carte Énergie Grass attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Jungko est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Leaf",
			fr: "Feuille poison",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon  Défenseur est maintenant Empoisonné.",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slice Drain",
			fr: "Trancher jusqu'au bout",
		},
		text: {
			en: "Remove 2 damage counters from Sceptile.",
			fr: "Retirez à Jungko 2 marqueurs de dégât.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
