import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-143",
	localId: 143,

	// Card informations
	name: {
		en: "Carbink",
		fr: "Strassie",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 703,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/143/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/143/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/143/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wonder Ray",
			fr: "Rayon Miracle",
		},
		text: {
			en: "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon by any Pokémon that has an Ability.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par des Pokémon ayant un talent.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
