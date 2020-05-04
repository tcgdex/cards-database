import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-11",
	localId: 11,

	// Card informations
	name: {
		en: "Ninjask",
		fr: "Ninjask",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 291,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/11/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/11/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/11/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 598,
		type: AbilityType.TALENT,
		name: {
			en: "Cast-off Shell",
			fr: "Coquille Libérante",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez chercher Munja dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Night Slash",
			fr: "Tranche-Nuit",
		},
		text: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
