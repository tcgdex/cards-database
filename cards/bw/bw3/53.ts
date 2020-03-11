import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-53",
	localId: 53,

	// Card informations
	name: {
		en: "Reuniclus",
		fr: "Symbios",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 579,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/53/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/53/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/53/high",
		},
	},

	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Dizzy Punch",
			fr: "Uppercut",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Bend",
			fr: "Contrôleur d'Esprit",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
