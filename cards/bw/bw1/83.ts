import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-83",
	localId: 83,

	// Card informations
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 508,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/83/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/83/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/83/high",
		},
	},

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Odor Sleuth",
			fr: "Flair",
		},
		text: {
			en: "Flip 3 coins. For each heads, put a card from your discard pile into your hand.",
			fr: "Lancez 3 pièces. Pour chaque côté face, prenez une carte dans votre pile de défausse et ajoutez-la à votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
