import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-35",
	localId: 35,

	// Card informations
	name: {
		en: "Swampert",
		fr: "Laggron",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/35/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/35/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/35/high",
		},
	},

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},

	abilities: [{
		id: 1170,
		type: AbilityType.TALENT,
		name: {
			en: "Power Draw",
			fr: "Puissance de Pioche",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 3 cards.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 3 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
