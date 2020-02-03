import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-45",
	localId: 45,

	// Card informations
	name: {
		en: "Jellicent",
		fr: "Moyade",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 593,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/45/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/45/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/45/high.png",
		},
	},

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 141,
		type: AbilityType.TALENT,
		name: {
			en: "Stickiness",
			fr: "Viscosité",
		},
		text: {
			en: "The Retreat Cost of each of your opponent's Pokémon in play is Colorless more.",
			fr: "Le coût de Retraite de chacun des Pokémon de votre adversaire est augmenté de Colorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Eerie Light",
			fr: "Lumière Étrange",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

