import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY67",
	localId: "XY67",

	// Card informations
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY67/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY67/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stardust",
			fr: "Poussière Étoile",
		},
		text: {
			en: "Discard a Special Energy attached to your opponent's Active Pokémon. If you do, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire. Dans ce cas, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Dream Dance",
		},
		text: {
			en: "Both Active Pokémon are now Asleep.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
