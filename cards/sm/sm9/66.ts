import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-66",
	localId: 66,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/66/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/66/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 1358,
		type: AbilityType.TALENT,
		name: {
			en: "Scoop-Up Block",
			fr: "Rappel Interdit",
		},
		text: {
			en: "Your opponent's Pokémon that have any damage counters on them, and any cards attached to those Pokémon, can't be put into your opponent's hand.",
			fr: "Les Pokémon de votre adversaire qui ont des marqueurs de dégâts, et toutes les cartes qui sont attachées à ces Pokémon, ne peuvent pas être mis dans la main de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
