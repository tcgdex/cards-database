import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-134",
	localId: 134,

	// Card informations
	name: {
		en: "Necrozma-GX",
		fr: "Necrozma-GX",
	},

	hp: 180,

	type: [
		Type.PSYCHIC,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/134/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/134/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/134/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1136,
		type: AbilityType.TALENT,
		name: {
			en: "Light's End",
			fr: "Extinction des Feux",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from Colorless Pokémon.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Colorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Prismatic Burst",
			fr: "Explosion Prismatique",
		},
		text: {
			en: "Discard all Psychic Energy from this Pokémon. This attack does 60 more damage for each card you discarded in this way.",
			fr: "Défaussez toute l’Énergie Psychic de ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Black Ray-GX",
			fr: "Rayon Noir-GX",
		},
		text: {
			en: "This attack does 100 damage to each of your opponent's Pokémon-GX and Pokémon-EX. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 100 dégâts à chacun des Pokémon-GX et Pokémon-EX de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
