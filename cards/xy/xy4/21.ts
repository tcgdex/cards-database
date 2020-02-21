import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-21",
	localId: 21,

	// Card informations
	name: {
		en: "Jellicent",
		fr: "Moyade",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 593,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/21/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/21/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/21/high",
		},
	},

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
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
			Type.WATER
		],
		name: {
			en: "Meddling",
			fr: "Ingérence",
		},
		text: {
			en: "Attach 3 Energy cards from your opponent's discard pile to his or her Pokémon in any way you like.",
			fr: "Attachez 3 cartes Énergie de la pile de défausse de votre adversaire à ses Pokémon, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ensnaring Spray",
			fr: "Jet Pénalisant",
		},
		text: {
			en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
