import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 417,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/18/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/18/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Noriko Hotta",

	abilities: [{
		id: 664,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Self-Generation",
			fr: "Auto-génération",
		},
		text: {
			en: "Once during your turn, when you put Pachirisu from your hand onto your Bench, you may attach up to 2 Lightning Energy cards from your hand to Pachirisu.",
			fr: "Une seule fois pendant votre tour, lorsque vous placez Pachirisu de votre main sur votre Banc, vous pouvez lui attacher 2 cartes Énergie Lightning.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Shocking Bolt",
			fr: "Éclair neutralisant",
		},
		text: {
			en: "Put all Energy cards attached to Pachirisu in the Lost Zone.",
			fr: "Placez toutes les cartes Énergie attachées à Pachirisu dans la Zone Perdue.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
