import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-46",
	localId: 46,

	// Card informations
	name: {
		en: "Spinda",
		fr: "Spinda",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 327,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/46/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/46/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Synchro Removal",
			fr: "Enlèvement synchronisé",
		},
		text: {
			en: "If any Energy card attached to Spinda is the same type as any Energy card attached to the Defending Pokémon, discard 1 of those Energy cards from the Defending Pokémon.",
			fr: "Si une carte Énergie attachée à Spinda est du même type que n'importe quelle carte Énergie attachée au Pokémon Défenseur, défaussez 1 de ces cartes Énergie attachées au Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pulled Punch",
			fr: "Poing doux",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 30.",
			fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, les dégâts de base de cette attaque sont de 10 au lieu de 30.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
