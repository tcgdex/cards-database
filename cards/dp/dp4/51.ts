import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-51",
	localId: 51,

	// Card informations
	name: {
		en: "Relicanth",
		fr: "Relicanth",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 369,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/51/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/51/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {
			en: "Primal Calling",
			fr: "Appel primitif",
		},
		text: {
			en: "Search your deck for up to 3 Trainer cards that have Fossil in their names, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 3 cartes Dresseur dont le nom comporte Fossile, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Swirl",
			fr: "Tourbillon dodo",
		},
		text: {
			en: "Both Relicanth and the Defending Pokémon are now Asleep.",
			fr: "Relicanth et le Pokémon Défenseur sont maintenant Endormis.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
