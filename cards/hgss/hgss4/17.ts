import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-17",
	localId: 17,

	// Card informations
	name: {
		en: "Ditto",
		fr: "Metamorph",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/17/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/17/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",

	abilities: [{
		id: 1101,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dittobolic",
			fr: "Metamornifle",
		},
		text: {
			en: "The number of Benched Pokémon your opponent can have is now 4. If your opponent has 5 Benched Pokémon, your opponent must discard 1 of them and all cards attached to it.",
			fr: "Le nombre de Pokémon de Banc de votre adversaire est maintenant limité à 4. Si votre adversaire a 5 Pokémon de Banc, il doit défausser l'un d'entre eux et toutes les cartes qui lui sont attachées.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Point",
			fr: "Point-Pointu",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
