import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-37",
	localId: 37,

	// Card informations
	name: {
		en: "Arbok",
		fr: "Arbok",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/37/high",
		},
	},

	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kodama",

	abilities: [{
		id: 542,
		type: AbilityType.TALENT,
		name: {
			en: "Intimidating Pattern",
			fr: "Style Intimidant",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
