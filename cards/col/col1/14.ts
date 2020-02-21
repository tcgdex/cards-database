import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/14/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/14/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/14/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 68,
		name: "Takashi Yamaguchi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dimension Sphere",
			fr: "Sphère dimensionnelle",
		},
		text: {
			en: "Does 30 damage plus 20 more damage for each of your Pokémon in the Lost Zone.",
			fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chacun de vos Pokémon se trouvant dans la Zone Perdue.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sky Uppercut",
			fr: "Stratopercut",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
