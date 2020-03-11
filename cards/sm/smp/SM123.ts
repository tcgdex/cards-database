import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM123",
	localId: "SM123",

	// Card informations
	name: {
		en: "Dawn Wings Necrozma",
		fr: "Necrozma Ailes de l’Aurore",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM123/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM123/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "nagimiso",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Gulf Stream",
			fr: "Courant du Golfe",
		},
		text: {
			en: "If you have exactly 6 Prize cards remaining, this attack does 20 more damage for each damage counter on this Pokémon.",
			fr: "S’il vous reste exactement 6 cartes Récompense, cette attaque inflige 20 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Sword of Dawn",
			fr: "Épée de l’Aurore",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.DARKNESS,
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
