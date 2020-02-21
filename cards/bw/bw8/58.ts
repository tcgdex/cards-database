import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-58",
	localId: 58,

	// Card informations
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/58/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/58/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/58/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 459,
		type: AbilityType.TALENT,
		name: {
			en: "Aftermath",
			fr: "Boom Final",
		},
		text: {
			en: "When this Pokémon is Knocked Out by damage from an opponent's attack, discard the top 3 cards of your opponent's deck.",
			fr: "Lorsque ce Pokémon est mis K.O. par les dégâts d'une attaque de votre adversaire, défaussez les 3 cartes du dessus du deck de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Smogbank",
			fr: "Smog Envahissant",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
