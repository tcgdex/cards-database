import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm11/45/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/45/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/45/high.png",
		},
	},

	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

