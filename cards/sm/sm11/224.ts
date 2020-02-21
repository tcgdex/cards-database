import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-224",
	localId: 224,

	// Card informations
	name: {
		en: "Aerodactyl-GX",
		fr: "Ptéra-GX",
	},

	hp: 210,

	type: [
		Type.FIGHTING,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/224/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/224/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/224/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/224/high",
		},
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 187,
		name: "ConceptLab"
	},

	abilities: [{
		id: 924,
		type: AbilityType.TALENT,
		name: {
			en: "Primal Winds",
			fr: "Vents Primaires",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost Colorless more.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de base de votre adversaire coûtent Colorless de plus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
		},
		damage: 120
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Wild Dive-GX",
			fr: "Piqué Fou-GX",
		},
		text: {
			en: "This attack does 50 damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
