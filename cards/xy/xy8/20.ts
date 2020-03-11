import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-20",
	localId: 20,

	// Card informations
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/20/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/20/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/20/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Massive Eruption",
			fr: "Éruption Massive",
		},
		text: {
			en: "Discard the top 5 cards of your deck. This attack does 80 damage times the number of Energy cards you discarded.",
			fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
		},
		damage: 80
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare Destroy",
			fr: "Éclatodestruction",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon. Then, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon. Ensuite, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
