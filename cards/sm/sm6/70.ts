import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-70",
	localId: 70,

	// Card informations
	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 701,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Drop",
			fr: "Chute Libre",
		},
		text: {
			en: "This attack does 20 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 20 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
