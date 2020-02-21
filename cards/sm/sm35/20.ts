import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-20",
	localId: 20,

	// Card informations
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 160,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/20/high",
		},
	},

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 80
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
