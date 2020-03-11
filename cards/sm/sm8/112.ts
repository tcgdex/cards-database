import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-112",
	localId: 112,

	// Card informations
	name: {
		en: "Donphan",
		fr: "Donphan",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 232,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/112/high",
		},
	},

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 1087,
		type: AbilityType.TALENT,
		name: {
			en: "Sturdy",
			fr: "Fermeté",
		},
		text: {
			en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d’une attaque, ce Pokémon n’est pas mis K.O. et il lui reste 10 PV.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Spin",
			fr: "Tournis Roulis",
		},
		text: {
			en: "During your next turn, this Pokémon's Rolling Spin attack does 70 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Tournis Roulis de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
