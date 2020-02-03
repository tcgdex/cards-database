import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm7/17/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/17/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/17/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/17/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



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

