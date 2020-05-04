import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY40",
	localId: "XY40",

	// Card informations
	name: {
		en: "Ditto",
		fr: "Métamorph",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY40/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY40/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1404,
		type: AbilityType.TALENT,
		name: {
			en: "Metamorphosis Gene",
			fr: "Gène Métamorphique",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon, it can use the attacks of your opponent's Active Pokémon. (You still need the necessary Energy to use each attack.)",
			fr: "Si ce Pokémon est votre Pokémon Actif, il peut utiliser les attaques du Pokémon Actif de votre adversaire. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stick On",
			fr: "Collage",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
