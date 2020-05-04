import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-21",
	localId: 21,

	// Card informations
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 555,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/21/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/21/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/21/high",
		},
	},

	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Smash",
			fr: "Éclate-Roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Punch",
			fr: "Poing de Feu",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
