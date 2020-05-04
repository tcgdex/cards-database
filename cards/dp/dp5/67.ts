import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-67",
	localId: 67,

	// Card informations
	name: {
		en: "Kabuto",
		fr: "Kabuto",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/67/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/67/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/67/high",
		},
	},

	evolveFrom: {
		en: "Dome Fossil",
		fr: "Fossile Dôme",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 485,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Ancient Guidance",
			fr: "Conseils ancestraux",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for Helix Fossil, Dome Fossil, or Old Amber and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Kabuto is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez Fossile Nautile, Fossile Dôme ou Vieil Ambre dans votre deck et placez-la sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Kabuto est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Shell Attack",
			fr: "Coquill-attaque",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
