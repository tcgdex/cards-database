import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM70",
	localId: "SM70",

	// Card informations
	name: {
		en: "Shining Ho-Oh",
		fr: "Ho-Oh Brillant",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM70/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM70/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hitoshi Ariga",

	abilities: [{
		id: 149,
		type: AbilityType.TALENT,
		name: {
			en: "Golden Wing",
			fr: "Aile Dorée",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, move up to 2 basic Energy cards from this Pokémon to your Benched Pokémon in any way you like.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu’il est mis K.O. par les dégâts d’une attaque de votre adversaire, déplacez jusqu’à 2 cartes Énergie de base de ce Pokémon sur vos Pokémon de Banc, de la manière que vous voulez.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Blast",
			fr: "Déflagration",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
