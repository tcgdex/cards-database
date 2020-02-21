import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-69",
	localId: 69,

	// Card informations
	name: {
		en: "Omanyte",
		fr: "Amonita",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 138,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/69/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/69/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/69/high",
		},
	},

	evolveFrom: {
		en: "Helix Fossil",
		fr: "Fossile Nautile",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},

	abilities: [{
		id: 41,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Call Up",
			fr: "Mobilisation",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your discard pile for Helix Fossil, Dome Fossil, or Old Amber and put it onto your Bench. This power can't be used if Omanyte is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez Fossile Nautile, Fossile Dôme ou Vieil Ambre dans votre deck et placez-la sur votre Banc. Ce pouvoir ne peut pas être utilisé si Amonita est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wash Over",
			fr: "Gros lavage",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
