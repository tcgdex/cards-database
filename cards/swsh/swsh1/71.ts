import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-71",
	localId: 71,

	// Card informations
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/71/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/71/low",
		}
	},

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 42,
		name: "otumami"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Volt Wave",
			fr: "Vague Survoltée",
		},
		text: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
