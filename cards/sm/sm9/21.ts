import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-21",
	localId: 21,

	// Card informations
	name: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 726,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/21/high",
		},
	},

	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Roar",
			fr: "Hurlement",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
