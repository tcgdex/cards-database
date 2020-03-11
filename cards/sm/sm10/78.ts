import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-78",
	localId: 78,

	// Card informations
	name: {
		en: "Mismagius",
		fr: "Magirêve",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/78/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/78/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/78/high",
		},
	},

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",

	abilities: [{
		id: 444,
		type: AbilityType.TALENT,
		name: {
			en: "Mysterious Message",
			fr: "Message Mystérieux",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw cards until you have 7 cards in your hand. If you drew any cards in this way, this Pokémon is Knocked Out.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à avoir 7 cartes en main. Si vous avez pioché des cartes de cette façon, ce Pokémon est mis K.O.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
