import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Mantine",
		fr: "Demanta",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 226,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/45/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/45/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Group Swim",
			fr: "Nage de groupe",
		},
		text: {
			en: "Search your deck for a Water Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez un Pokémon Water dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Aqua Slash",
			fr: "Aqua-tranche",
		},
		text: {
			en: "Mantine can't attack during your next turn.",
			fr: "Demanta ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
