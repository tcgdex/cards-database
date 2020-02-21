import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-56",
	localId: 56,

	// Card informations
	name: {
		en: "Ambipom G",
		fr: "Capidextre  Niv. 40",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 424,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/56/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/56/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 90,
		name: "Makoto Imai"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Code",
			fr: "Queue codée",
		},
		text: {
			en: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
			fr: "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Snap Attack",
			fr: "Attaque soudaine",
		},
		text: {
			en: "If the Defending Pokémon has any Energy cards attached to it, this attack's base damage is 20 instead of 60.",
			fr: "Si le Pokémon Défenseur possède des cartes Énergie, les dégâts de base de cette attaque sont de 20 au lieu de 60.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
