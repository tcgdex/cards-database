import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-132",
	localId: 132,

	// Card informations
	name: {
		en: "Galarian Stunfisk",
		fr: "Limonde de Galar",
	},

	hp: 120,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/132/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/132/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/132/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/132/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Snap Trap",
			fr: "Troquenard",
		},
		text: {
			en: "If this Pokémon is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), discard an Energy from the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même s’il est mis K.O.), défaussez une Énergie du Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Damage Rush",
			fr: "Charge Destructrice",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: "30+"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

