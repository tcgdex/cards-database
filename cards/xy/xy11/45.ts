import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-45",
	localId: 45,

	// Card informations
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},

	hp: 150,

	type: [
		Type.PSYCHIC,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/45/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/45/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/45/high",
		},
	},

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mina Nakai",

	abilities: [{
		id: 539,
		type: AbilityType.TALENT,
		name: {
			en: "King's Palace",
			fr: "Palais Royal",
		},
		text: {
			en: "Your Nidoqueen's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Nidoqueen infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Power Lariat",
			fr: "Lasso Puissant",
		},
		text: {
			en: "This attack does 30 more damage for each Evolution Pokémon on your Bench.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
