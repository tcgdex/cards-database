import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-20",
	localId: 20,

	// Card informations
	name: {
		en: "Ninetales",
		fr: "Feunard",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/20/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/20/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/20/high.png",
		},
	},

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Heat Acceleration",
			fr: "Accélération ardente",
		},
		text: {
			en: "Search your discard pile for up to 3 Fire Energy cards and attach them to 1 of your Pokémon.",
			fr: "Cherchez dans votre pile de défausse jusqu'à 3 cartes Énergie Fire et attachez-les à l'un de vos Pokémon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Searing Flame",
			fr: "Flammes calcinantes",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

