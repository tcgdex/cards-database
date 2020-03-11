import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-80",
	localId: 80,

	// Card informations
	name: {
		en: "Medicham",
		fr: "Charmina",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 308,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/80/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/80/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/80/high",
		},
	},

	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Pure Power",
			fr: "Force Pure",
		},
		text: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Windmill Kick",
			fr: "Coup d'Pied Éolien",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
