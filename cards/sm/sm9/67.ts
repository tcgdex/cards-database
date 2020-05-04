import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-67",
	localId: 67,

	// Card informations
	name: {
		en: "Mr. Mime-GX",
		fr: "M. Mime-GX",
	},

	hp: 150,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 962,
		type: AbilityType.TALENT,
		name: {
			en: "Magic Odds",
			fr: "Impair Magique",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by your opponent's attacks if that damage is exactly 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, or 250.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques de votre adversaire si le montant des dégâts est égal à 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 ou 250.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Breakdown",
			fr: "Réaction",
		},
		text: {
			en: "For each card in your opponent's hand, put 1 damage counter on their Active Pokémon.",
			fr: "Pour chaque carte dans la main de votre adversaire, placez un marqueur de dégâts sur son Pokémon Actif.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Life Trick-GX",
			fr: "Astuce Vitale-GX",
		},
		text: {
			en: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],





	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
