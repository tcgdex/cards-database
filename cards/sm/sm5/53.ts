import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-53",
	localId: 53,

	// Card informations
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lightless World",
			fr: "Monde Obscur",
		},
		text: {
			en: "Put 2 Supporter cards from your discard pile into your hand.",
			fr: "Ajoutez 2 cartes Supporter de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Terrify",
			fr: "Terrifier",
		},
		text: {
			en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
		damage: 10
	}],





	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
