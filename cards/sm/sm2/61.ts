import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-61",
	localId: 61,

	// Card informations
	name: {
		en: "Lunala",
		fr: "Lunala",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 792,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/61/high",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shatter Shot",
			fr: "Coup Fracassant",
		},
		text: {
			en: "This attack does 40 damage times the amount of Psychic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts multipliés par le nombre d’Énergies Psychic attachées à ce Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Wings of the Moone",
			fr: "Ailes du Halo Lunaire",
		},
		text: {
			en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			fr: "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc, de la manière que vous voulez.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
