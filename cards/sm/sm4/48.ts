import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-48",
	localId: 48,

	// Card informations
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 765,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/48/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/48/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/48/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/48/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Fixer of the Forest",
			fr: "Réparateur de la Forêt",
		},
		text: {
			en: "Put 3 Pokémon Tool cards from your discard pile into your hand.",
			fr: "Ajoutez 3 cartes Outil Pokémon de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud’Boul",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

