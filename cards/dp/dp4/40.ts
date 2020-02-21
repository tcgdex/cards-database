import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-40",
	localId: 40,

	// Card informations
	name: {
		en: "Grovyle",
		fr: "Massko",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 253,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/40/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/40/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/40/high",
		},
	},

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		name: {
			en: "Greenness",
			fr: "Verdure",
		},
		text: {
			en: "Search your deck for up to 2 Grass Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Poison Breath",
			fr: "Haleine empoisonnée",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
