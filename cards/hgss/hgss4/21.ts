import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-21",
	localId: 21,

	// Card informations
	name: {
		en: "Elekid",
		fr: "Elekid",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 239,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/21/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/21/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
			fr: "Joli visage endormi",
		},
		text: {
			en: "As long as Elekid is Asleep, prevent all damage done to Elekid by attacks.",
			fr: "Tant qu'Elekid est Endormi, empêchez tous les dégâts qui lui sont infligés par des attaques.",
		}
	}],

	attacks: [{
		name: {
			en: "Sparking Ball",
			fr: "Boule étincelante",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance. Elekid is now Asleep.",
			fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Elekid est maintenant Endormi.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
