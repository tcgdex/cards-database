import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-60",
	localId: 60,

	// Card informations
	name: {
		en: "Ledian",
		fr: "Coxyclaque",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 166,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/60/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/60/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/60/high",
		},
	},

	evolveFrom: {
		en: "Ledyba",
		fr: "Ledyba",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Comet Punch",
			fr: "Poing comète",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Baton Pass",
			fr: "Relais",
		},
		text: {
			en: "You may switch Ledian with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Ledian as you like to the new Active Pokémon.",
			fr: "Vous pouvez échanger Coxyclaque avec 1 des Pokémon de votre Banc. Déplacez alors sur le nouveau Pokémon Actif autant de cartes Énergie attachées à Coxyclaque que vous le voulez.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
