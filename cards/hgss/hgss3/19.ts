import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-19",
	localId: 19,

	// Card informations
	name: {
		en: "Mismagius",
		fr: "Magireve",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/19/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/19/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/19/high",
		},
	},

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforeve",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sleeping Spell",
			fr: "Endormissement",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poltergeist",
			fr: "Poltergeist",
		},
		text: {
			en: "Look at your opponent's hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent's hand.",
			fr: "Regardez la main de votre adversaire. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Dresseur, Supporter et Stade qui se trouvent dans la main de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
