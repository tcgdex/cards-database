import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-77",
	localId: 77,

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
			en: "https://assets.tcgdex.net/en/sm/sm12/77/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/77/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/77/high",
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
		id: 114,
		name: "Motofumi Fujiwara"
	},

	abilities: [{
		id: 1166,
		type: AbilityType.TALENT,
		name: {
			en: "Blow-Away Bomb",
			fr: "Bombe Repoussante",
		},
		text: {
			en: "Once during your turn, when you discard this Pokémon with the effect of Roxie, you may put 1 damage counter on each of your opponent's Pokémon. (Place damage counters after the effect of Roxie.)",
			fr: "Une seule fois pendant votre tour, lorsque vous défaussez ce Pokémon du fait de l’effet de la carte Strykna, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire. (Placez les marqueurs de dégâts après l’effet de Strykna.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Balloon Burst",
			fr: "Explosion de Ballon",
		},
		text: {
			en: "Discard this Pokémon and all cards attached to it.",
			fr: "Défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
