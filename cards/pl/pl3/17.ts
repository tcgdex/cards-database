import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-17",
	localId: 17,

	// Card informations
	name: {
		en: "Butterfree FB",
		fr: "Papilusion ",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 12,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/17/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/17/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Lee HyunJung",

	abilities: [{
		id: 640,
		type: AbilityType.POKEBODY,
		name: {
			en: "Compound Eyes",
			fr: "Oeil composé",
		},
		text: {
			en: "If your opponent's Active Pokémon has any Poké-Bodies, each of Butterfree FB's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si le Pokémon Actif de votre adversaire possède des Poké-Bodies, chacune des attaques de Papilusion  inflige 30 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Select Powder",
			fr: "Poudre select",
		},
		text: {
			en: "Choose either Burned or Poisoned. The Defending Pokémon is now affected by that Special Condition.",
			fr: "Choisissez Brûlé ou Empoisonné. Le Pokémon Défenseur est maintenant affecté par cet État Spécial.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
