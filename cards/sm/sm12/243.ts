import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-243",
	localId: 243,

	// Card informations
	name: {
		en: "Koffing",
		fr: "Smogo",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/243/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/243/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/243/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/243/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 92,
		name: "HYOGONOSUKE"
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
			en: "Poison Gas",
			fr: "Gaz Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
