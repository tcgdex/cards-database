import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-74",
	localId: 74,

	// Card informations
	name: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 686,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/74/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/74/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1432,
		type: AbilityType.TALENT,
		name: {
			en: "Upside-Down Evolution",
			fr: "Évolution Tête en Bas",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is Confused, you may search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est Confus, vous pouvez chercher dans votre deck une carte Évolution de ce Pokémon et la placer sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Confusion Wave",
			fr: "Vague de Confusion",
		},
		text: {
			en: "Both Active Pokémon are now Confused.",
			fr: "Les deux Pokémon Actifs sont maintenant Confus.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
