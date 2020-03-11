import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-52",
	localId: 52,

	// Card informations
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/52/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/52/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Lookout",
			fr: "Surveillance",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aura Break",
			fr: "Aura Inversée",
		},
		text: {
			en: "If the Defending Pokémon is a Darkness or Fairy Pokémon, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon Darkness ou Fairy, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
