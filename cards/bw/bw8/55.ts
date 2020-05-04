import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-55",
	localId: 55,

	// Card informations
	name: {
		en: "Crobat",
		fr: "Nostenfer",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/55/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/55/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/55/high",
		},
	},

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1025,
		type: AbilityType.TALENT,
		name: {
			en: "Night Sight",
			fr: "Vision de Nuit",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ultra-Toxic Fang",
			fr: "Croc Ultratoxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
