import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-113",
	localId: 113,

	// Card informations
	name: {
		en: "Grapploct",
		fr: "Krakos",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/113/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/113/low",
		}
	},

	evolveFrom: {
		en: "Clobbopus",
		fr: "Poulpaf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Octolock",
			fr: "Octoprise",
		},
		text: {
			en: "Until this Grapploct leaves the Active Spot, the Defending Pokémon's attacks cost ColorlessColorless more, and the Defending Pokémon can't retreat. This effect can't be applied more than once.",
			fr: "Tant que ce Krakos est sur le Poste Actif, les attaques du Pokémon Défenseur coûtent ColorlessColorless de plus, et le Pokémon Défenseur ne peut pas battre en retraite. Cet effet n’est applicable qu’une fois.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Tough Swing",
			fr: "Frappe Solide",
		},
		text: {
			en: "This attack’s damage isn’t affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
