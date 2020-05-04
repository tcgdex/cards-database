import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-8",
	localId: 8,

	// Card informations
	name: {
		en: "Rapidash",
		fr: "Galopa",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 78,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/8/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/8/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/8/high",
		},
	},

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",

	abilities: [{
		id: 807,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fiery Spirit",
			fr: "Esprit flamboyant",
		},
		text: {
			en: "Rapidash can't be Confused.",
			fr: "Galopa ne peut pas être Confus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ring of Fire",
			fr: "Anneau de feu",
		},
		text: {
			en: "The Defending Pokémon is now Burned and can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé et ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
