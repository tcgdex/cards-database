import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-119",
	localId: 119,

	// Card informations
	name: {
		en: "Ho-Oh-EX",
		fr: "Ho-Oh-EX",
	},

	hp: 160,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/119/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/119/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/119/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/119/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 140,
		type: AbilityType.TALENT,
		name: {
			en: "Rebirth",
			fr: "Renaissance",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may flip a coin. If heads, put this Pokémon onto your Bench and attach 3 different types of basic Energy cards from your discard pile to this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez lancer une pièce. Si c'est face, placez ce Pokémon sur votre Banc et attachez 3 différents types de cartes Énergie de base de votre pile de défausse à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Burn",
			fr: "Brûlure Arc-en-ciel",
		},
		text: {
			en: "Does 20 more damage for each different type of basic Energy attached to this Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque différent type d'Énergie de base attaché à ce Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

