import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-45",
	localId: 45,

	// Card informations
	name: {
		en: "Carracosta",
		fr: "Mégapagos",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 565,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/45/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/45/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/45/high",
		},
	},

	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1347,
		type: AbilityType.TALENT,
		name: {
			en: "Ancient Custom",
			fr: "Coûtume Antique",
		},
		text: {
			en: "Pokémon Tool cards attached to your opponent's Pokémon have no effect.",
			fr: "Les cartes Outil Pokémon attachées aux Pokémon de votre adversaire n’ont aucun effet.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Impact",
			fr: "Impact Aqua",
		},
		text: {
			en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
