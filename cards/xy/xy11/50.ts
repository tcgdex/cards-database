import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-50",
	localId: 50,

	// Card informations
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 609,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/50/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/50/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/50/high",
		},
	},

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Tomokazu Komiya",

	abilities: [{
		id: 252,
		type: AbilityType.TALENT,
		name: {
			en: "Sinister Selection",
			fr: "Sélection Sinistre",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put 1 of them into your hand. Discard the other card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck et ajouter l’une d’entre elles à votre main. Défaussez l’autre carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Past Friends",
			fr: "Amis d’Antan",
		},
		text: {
			en: "This attack does 10 more damage for each Supporter card in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Supporter dans votre pile de défausse.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
