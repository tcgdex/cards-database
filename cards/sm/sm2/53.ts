import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-53",
	localId: 53,

	// Card informations
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 575,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/53/high",
		},
	},

	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Slap",
			fr: "Gifle",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
