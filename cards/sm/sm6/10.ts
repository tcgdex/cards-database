import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-10",
	localId: 10,

	// Card informations
	name: {
		en: "Gogoat",
		fr: "Chevroum",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 673,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/10/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/10/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/10/high",
		},
	},

	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Milk Drink",
			fr: "Lait à Boire",
		},
		text: {
			en: "Flip 2 coins. For each heads, heal 40 damage from this Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque côté face, soignez 40 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-Edge",
			fr: "Damoclès",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige 30 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
