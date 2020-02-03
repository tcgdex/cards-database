import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-118",
	localId: 118,

	// Card informations
	name: {
		en: "Throh",
		fr: "Judokrak",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 538,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/118/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/118/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/118/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Reverse Shoulder Throw",
			fr: "Ippon Seoi Nage",
		},
		text: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
			fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 90 dégâts supplémentaires.",
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
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

