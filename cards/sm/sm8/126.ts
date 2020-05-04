import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-126",
	localId: 126,

	// Card informations
	name: {
		en: "Scizor",
		fr: "Cizayox",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/126/high",
		},
	},

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Anesaki Dynamic",

	abilities: [{
		id: 276,
		type: AbilityType.TALENT,
		name: {
			en: "Exoskeleton",
			fr: "Exosquelette",
		},
		text: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Special Blow",
			fr: "Coup Spécial",
		},
		text: {
			en: "If your opponent's Active Pokémon has any Special Energy attached to it, this attack does 70 more damage.",
			fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
