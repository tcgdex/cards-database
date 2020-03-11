import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-9",
	localId: 9,

	dexId: 731,

	// Card informations
	name: {
		en: "Dhelmise V",
		fr: "Sinistrail V",
	},

	hp: 220,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/9/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/9/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.V,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Anchor Anger",
			fr: "Colère Ancrée",
		},
		text: {
			en: "If any of your Grass Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 90 more damage.",
			fr: "Si l’un de vos Pokémon Plante a été mis K.O. par les dégâts d’une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: "30+"
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Hammer",
			fr: "Giga Marteau",
		},
		text: {
			en: "During your next turn, this Pokémon can't use Giga Hammer.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
