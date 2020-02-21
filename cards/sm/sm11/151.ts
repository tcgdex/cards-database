import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-151",
	localId: 151,

	// Card informations
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/151/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/151/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/151/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},

	abilities: [{
		id: 972,
		type: AbilityType.TALENT,
		name: {
			en: "Hurricane Charge",
			fr: "Charge Ouragan",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Water Energy card, a Lightning Energy card, or 1 of each from your hand to your Pokémon in any way you like.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water, une carte Énergie Lightning, ou une de chaque de votre main à vos Pokémon, de la manière que vous voulez.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Impact",
			fr: "Impact du Dragon",
		},
		text: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
		},
		damage: 170
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
