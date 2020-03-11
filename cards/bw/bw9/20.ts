import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-20",
	localId: 20,

	// Card informations
	name: {
		en: "Vaporeon",
		fr: "Aquali",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/20/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/20/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/20/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Refreshing Rain",
			fr: "Ondée Rafraîchissante",
		},
		text: {
			en: "Heal 30 damage from each of your Pokémon.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Gold Breaker",
			fr: "Goliastruction",
		},
		text: {
			en: "If the Defending Pokémon is a Pokémon-EX, this attack does 50 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon-EX, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
