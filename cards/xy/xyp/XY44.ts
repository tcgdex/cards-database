import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY44",
	localId: "XY44",

	// Card informations
	name: {
		en: "M Diancie-EX",
		fr: "M Diancie-EX",
	},

	hp: 190,

	type: [
		Type.FAIRY,
	],

	dexId: 719,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY44/high",
		},
	},

	evolveFrom: {
		en: "Diancie-EX",
		fr: "Diancie-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Diamond Force",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to each of your Pokémon by attacks from your opponent's Pokémon-EX. (If this Pokémon is no longer your Active Pokémon, this effect ends.)",
		},
		damage: 100
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			fr: "Force Diamant",
		},
		text: {
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à chacun de vos Pokémon par les attaques des Pokémon-EX de votre adversaire. (Si ce Pokémon n'est plus votre Pokémon Actif, cet effet se termine.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
