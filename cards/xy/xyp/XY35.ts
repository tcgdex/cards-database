import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY35",
	localId: "XY35",

	// Card informations
	name: {
		en: "M Metagross-EX",
		fr: "M Métalosse-EEX",
	},

	hp: 220,

	type: [
		Type.METAL,
	],

	dexId: 376,


	evolveFrom: {
		en: "Metagross-EX",
		fr: "Métalosse-EEX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gatling Slug",
			fr: "Frappe Répétée",
		},
		text: {
			en: "This attack does 10 more damage for each Metal Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
