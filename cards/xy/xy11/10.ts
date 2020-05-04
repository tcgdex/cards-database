import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-10",
	localId: 10,

	// Card informations
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 274,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/10/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/10/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/10/high",
		},
	},

	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Harden",
			fr: "Armure",
		},
		text: {
			en: "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 60 or less.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d’une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 60 ou moins.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
