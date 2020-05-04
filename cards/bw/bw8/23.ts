import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-23",
	localId: 23,

	// Card informations
	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 631,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/23/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/23/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Luring Flame",
			fr: "Flamme Attrayante",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. The new Defending Pokémon is now Burned.",
			fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Brûlé.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fiery Licks",
			fr: "Léchouilles Incendiaires",
		},
		text: {
			en: "Discard the top 4 cards of your deck. This attack does 50 damage times the number of Fire Energy cards you discarded.",
			fr: "Défaussez les 4 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie Fire que vous avez défaussées.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
