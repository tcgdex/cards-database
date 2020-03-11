import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-45",
	localId: 45,

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
			en: "https://assets.tcgdex.net/en/bw/bw2/45/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/45/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/45/high",
		},
	},

	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
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
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
