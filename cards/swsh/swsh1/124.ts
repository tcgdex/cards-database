import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-124",
	localId: 124,

	// Card informations
	name: {
		en: "Toxicroak",
		fr: "Coatox",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/124/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/124/low",
		}
	},

	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ryuta Fuse",

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "More Poison",
			fr: "Poison Sans Fin",
		},
		text: {
			en: "Put 2 more damage counters on your opponent’s Poisoned Pokémon during Pokémon Checkup.",
			fr: "Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Claws",
			fr: "Griffes Empoisonnées",
		},
		text: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
