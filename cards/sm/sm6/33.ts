import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-33",
	localId: 33,

	// Card informations
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 752,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/33/high",
		},
	},

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kodama",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bubble",
			fr: "Écume",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bubble Trap",
			fr: "Piège d’Écume",
		},
		text: {
			en: "If 1 of your Pokémon used Bubble during your last turn, this attack does 80 more damage.",
			fr: "Si l’un de vos Pokémon a utilisé Écume pendant votre dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
