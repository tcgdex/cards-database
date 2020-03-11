import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-72",
	localId: 72,

	// Card informations
	name: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 198,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/72/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/72/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		name: {
			en: "Switcheroo",
			fr: "Passe-Passe",
		},
		text: {
			en: "Move a Pokémon Tool card attached to 1 of your opponent's Pokémon to another of your opponent's Pokémon (excluding Pokémon that already has a Pokémon Tool attached to it). (If an effect of this attack is prevented, this attack does nothing.)",
			fr: "Déplacez une carte Outil Pokémon attachée à 1 des Pokémon de votre adversaire sur un autre Pokémon de votre adversaire (Pokémon possédant déjà une carte Outil Pokémon exclus). (Si un effet de cette attaque est empêché, cette attaque est sans effet.)",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Flap",
			fr: "Battement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
