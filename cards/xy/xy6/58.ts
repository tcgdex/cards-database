import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-58",
	localId: 58,

	// Card informations
	name: {
		en: "Latios-EX",
		fr: "Latios-EX",
	},

	hp: 170,

	type: [
		Type.DRAGON,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Fast Raid",
			fr: "Raid Éclair",
		},
		text: {
			en: "If you go first, you can use this attack on your first turn.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Light Pulse",
			fr: "Vibrumineuse",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn.",
			fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
