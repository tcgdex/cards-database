import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-17",
	localId: 17,

	// Card informations
	name: {
		en: "Volbeat",
		fr: "Muciole",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 313,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Saya Tsuruta",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Pheromone Catch",
			fr: "Prise de Phéromones",
		},
		text: {
			en: "If your Illumise used Pheromone Signals during your last turn, this attack does 100 more damage.",
			fr: "Si votre Lumivole a utilisé Signaux de Phéromones pendant votre dernier tour, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
