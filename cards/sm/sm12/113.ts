import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-113",
	localId: 113,

	// Card informations
	name: {
		en: "Groudon",
		fr: "Groudon",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/113/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/113/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Drought",
			fr: "Sécheresse",
		},
		text: {
			en: "Attach up to 2 Fighting Energy cards from your hand to 1 of your Pokémon.",
			fr: "Attachez jusqu’à 2 cartes Énergie Fighting de votre main à l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Trembling Ground",
			fr: "Terrain Tremblant",
		},
		text: {
			en: "This Pokémon can't use Trembling Ground during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Terrain Tremblant pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
