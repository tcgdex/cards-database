import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-29",
	localId: 29,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/29/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/29/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 63,
		name: "Noriko Hotta"
	},

	abilities: [{
		id: 1098,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Trick Reveal",
			fr: "Ruse dévoilée",
		},
		text: {
			en: "Once during your turn (before your attack), you may have both you and your opponent reveal your hands. This power can't be used if Mr. Mime is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir de révéler votre main à votre adversaire et de voir la sienne. Ce pouvoir ne peut pas être utilisé si M. Mime est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Juggling",
			fr: "Jonglerie",
		},
		text: {
			en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
