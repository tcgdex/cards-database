import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM106",
	localId: "SM106",

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
			en: "https://assets.tcgdex.net/en/sm/smp/SM106/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM106/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM106/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



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

