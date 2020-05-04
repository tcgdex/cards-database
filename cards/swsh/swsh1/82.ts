import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-82",
	localId: 82,

	// Card informations
	name: {
		en: "Galarian Rapidash",
		fr: "Galopa de Galar",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/82/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/82/low",
		}
	},

	evolveFrom: {
		en: "Galarian Ponyta",
		fr: "Ponyta de Galar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "You Iribi",

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Pastel Veil",
			fr: "Voile Pastel",
		},
		text: {
			en: "Your Pokémon recover from all Special Conditions and can't be affected by any Special Conditions.",
			fr: "Vos Pokémon guérissent de tous les États Spéciaux et ne peuvent être affectés par aucun État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: "30+"
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
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
