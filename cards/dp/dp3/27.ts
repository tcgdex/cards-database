import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-27",
	localId: 27,

	// Card informations
	name: {
		en: "Furret",
		fr: "Fouinar",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 162,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/27/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/27/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/27/high",
		},
	},

	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {
			en: "Keen Eye",
			fr: "Regard vif",
		},
		text: {
			en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
			fr: "Choisissez jusqu'à 2 cartes dans votre deck et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Baton Pass",
			fr: "Relais",
		},
		text: {
			en: "You may switch Furret with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Furret as you like to the new Active Pokémon.",
			fr: "Vous pouvez échanger Fouinar avec 1 des Pokémon de votre Banc. Déplacez alors autant de cartes Énergie attachées à Fouinar que vous voulez sur le nouveau Pokémon Actif.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
