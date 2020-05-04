import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-15",
	localId: 15,

	// Card informations
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 71,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/15/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/15/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/15/high",
		},
	},

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Reactive Poison",
			fr: "Poison Réactif",
		},
		text: {
			en: "This attack does 60 more damage for each Special Condition affecting your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gastro Acid",
			fr: "Suc Digestif",
		},
		text: {
			en: "The Defending Pokémon has no Abilities until the end of your next turn.",
			fr: "Le Pokémon Défenseur n’a pas de talent jusqu’à la fin de votre prochain tour.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
