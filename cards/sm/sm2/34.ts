import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-34",
	localId: 34,

	// Card informations
	name: {
		en: "Vanillish",
		fr: "Sorboul",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 583,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/34/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/34/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/34/high",
		},
	},

	evolveFrom: {
		en: "Vanillite",
		fr: "Sorbébé",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ice Shard",
			fr: "Éclats Glace",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Fighting Pokémon, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
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
