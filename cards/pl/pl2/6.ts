import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-6",
	localId: 6,

	// Card informations
	name: {
		en: "Froslass GL",
		fr: "Momartik  Niv. 44",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 478,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/6/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/6/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sleep Inducer",
			fr: "Poussododo",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Asleep.",
			fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Wake-Up Slap",
			fr: "Réveil Forcé",
		},
		text: {
			en: "If the Defending Pokémon is affected by any Special Conditions, this attack does 30 damage plus 20 more damage. Then, remove all Special Conditions from the Defending Pokémon.",
			fr: "Si le Pokémon Défenseur est affecté par n'importe lequel des États Spéciaux, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Ensuite, retirez au Pokémon Défenseur tous ses États Spéciaux.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
