import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Chansey",
		fr: "Leveinard",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 113,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/69/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/69/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/69/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Healing Trial",
			fr: "Défi guérison",
		},
		text: {
			en: "Flip a coin. If heads, remove 3 damage counters from Chansey. If tails, remove 3 damage counters from the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, retirez à Leveinard 3 marqueurs de dégât. Si c'est pile, retirez au Pokémon Défenseur 3 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pulled Punch",
			fr: "Poing-doux",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 40.",
			fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, les dégâts de base de cette attaque sont de 10 au lieu de 40.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

