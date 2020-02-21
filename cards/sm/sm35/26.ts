import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-26",
	localId: 26,

	// Card informations
	name: {
		en: "Keldeo",
		fr: "Keldeo",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 647,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/26/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/26/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bail Out",
			fr: "Renflouage",
		},
		text: {
			en: "Put a Water Pokémon from your discard pile into your hand.",
			fr: "Ajoutez un Pokémon Water de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Resolute Blade",
			fr: "Lame Décidée",
		},
		text: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
