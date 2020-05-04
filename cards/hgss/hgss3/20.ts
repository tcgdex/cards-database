import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-20",
	localId: 20,

	// Card informations
	name: {
		en: "Rotom",
		fr: "Motisma",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/20/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/20/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",

	abilities: [{
		id: 1041,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Mischievous Trick",
			fr: "Sournoiserie",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch 1 of your face-down Prize cards with the top card of your deck. This power can't be used if Rotom is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger l'une de vos cartes Récompense qui est face cachée avec la carte du dessus de votre deck. Ce pouvoir ne peut pas être utilisé si Motisma est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Plasma Arrow",
			fr: "Flèche plasma",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage for each Energy attached to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts pour chaque carte Énergie attachée à ce Pokémon. Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
