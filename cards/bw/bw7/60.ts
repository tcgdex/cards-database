import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-60",
	localId: 60,

	// Card informations
	name: {
		en: "Grumpig",
		fr: "Groret",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 326,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/60/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/60/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/60/high",
		},
	},

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extrasensory",
			fr: "Extrasenseur",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 60 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
