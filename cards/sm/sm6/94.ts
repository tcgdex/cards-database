import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-94",
	localId: 94,

	// Card informations
	name: {
		en: "Goodra",
		fr: "Muplodocus",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 706,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/94/high",
		},
	},

	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "hatachu",

	abilities: [{
		id: 1148,
		type: AbilityType.TALENT,
		name: {
			en: "Hydration",
			fr: "Hydratation",
		},
		text: {
			en: "Whenever you attach a Water Energy card from your hand to this Pokémon, heal 20 damage from it.",
			fr: "Chaque fois que vous attachez une carte Énergie Water de votre main à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Soaking Horn",
			fr: "Corne Trempage",
		},
		text: {
			en: "If this Pokémon was healed during this turn, this attack does 80 more damage.",
			fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
