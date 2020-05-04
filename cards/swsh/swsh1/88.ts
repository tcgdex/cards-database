import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-88",
	localId: 88,

	// Card informations
	name: {
		en: "Musharna",
		fr: "Mushana",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/88/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/88/low",
		}
	},

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sleepy Pulse",
			fr: "Pouls Léthargique",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Asleep. During Pokémon Checkup, your opponent flips 2 coins instead of 1. If either of them is tails, that Pokémon is still Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Pendant le Contrôle Pokémon, votre adversaire lance 2 pièces au lieu d’une. S’il obtient au moins un côté pile, ce Pokémon-là reste Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Super Hypnoblast",
			fr: "Super Hypno-Rafale",
		},
		text: {
			en: "If your opponent’s Active Pokémon is Asleep, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 120 dégâts supplémentaires.",
		},
		damage: "10+"
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
