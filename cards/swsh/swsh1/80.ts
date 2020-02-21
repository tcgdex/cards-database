import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-80",
	localId: 80,

	// Card informations
	name: {
		en: "Morpeko VMAX",
		fr: "Morpeko VMAX",
	},

	hp: 300,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/80/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/80/low",
		}
	},

	evolveFrom: {
		en: "Morpeko V",
		fr: "Morpeko-V",
	},

	tags: [
		Tag.VMAX,
	],

	illustrator: {
		id: 39,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {
			en: "VMAX rule",
			fr: "Règle VMAX",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Max Discharge",
			fr: "Déchargeomax",
		},
		text: {
			en: "This attack also does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareVMAX,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
