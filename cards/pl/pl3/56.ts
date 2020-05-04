import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-56",
	localId: 56,

	// Card informations
	name: {
		en: "Dragonite FB",
		fr: "Dracolosse ",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/56/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/56/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Blow",
			fr: "Coup supersonique",
		},
		text: {
			en: "If the Defending Pokémon is a Pokémon SP, this attack's base damage is 80 instead of 20.",
			fr: "Si le Pokémon Défenseur est un Pokémon SP, les dégâts de base de cette attaque sont de 80 au lieu de 20.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Tail",
			fr: "Longue queue",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
