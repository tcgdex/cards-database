import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-46",
	localId: 46,

	// Card informations
	name: {
		en: "Emolga",
		fr: "Emolga",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 587,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/46/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/46/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},

	abilities: [{
		id: 1284,
		type: AbilityType.TALENT,
		name: {
			en: "Nuzzly Gathering",
			fr: "Rassemblement Frimousse",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Pokémon that has the Nuzzle attack, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon avec l’attaque Frotte-Frimousse, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Nuzzle",
			fr: "Frotte-Frimousse",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
