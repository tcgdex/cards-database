import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-56",
	localId: 56,

	// Card informations
	name: {
		en: "Anorith",
		fr: "Anorith",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 347,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/56/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/56/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/56/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/56/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},

	abilities: [{
		id: 1031,
		type: AbilityType.TALENT,
		name: {
			en: "Restored Barrier",
			fr: "Bouclier Recréé",
		},
		text: {
			en: "Each of your Restored Pokémon has no Weakness.",
			fr: "Aucun de vos Pokémon Recréés n’a de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "X-Scissor",
			fr: "Plaie-Croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

