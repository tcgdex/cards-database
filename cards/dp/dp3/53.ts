import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-53",
	localId: 53,

	// Card informations
	name: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/53/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/53/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/53/high.png",
		},
	},

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psychic Research",
			fr: "Recherche psy",
		},
		text: {
			en: "Search your discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your discard pile.)",
			fr: "Choisissez dans votre pile de défausse une carte Supporter et utilisez l'effet de cette carte comme l'effet de cette attaque. (La carte Supporter reste dans la pile de défausse.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Telekinesis",
			fr: "Télékinésie",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

