import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-9",
	localId: 9,

	// Card informations
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/9/high",
		},
	},

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	tags: [
		Tag.STAGE2,
	],



	abilities: [{
		id: 14,
		type: AbilityType.TALENT,
		name: {
			en: "Evasion Jutsu",
			fr: "Jutsu Évasion",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Furious Shurikens",
			fr: "Shuriken Furieux",
		},
		text: {
			en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
