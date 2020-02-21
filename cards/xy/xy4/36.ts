import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-36",
	localId: 36,

	// Card informations
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/36/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/36/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

	abilities: [{
		id: 821,
		type: AbilityType.TALENT,
		name: {
			en: "Bide Barricade",
			fr: "Épreuve d'Endurance",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Psychic Pokémon).",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent (à part les Pokémon Psychic).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Assault",
			fr: "Assaut Psychique",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
