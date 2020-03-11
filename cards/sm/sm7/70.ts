import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-70",
	localId: 70,

	// Card informations
	name: {
		en: "Lunala",
		fr: "Lunala",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 792,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/70/high",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1333,
		type: AbilityType.TALENT,
		name: {
			en: "Shadow Shield",
			fr: "Spectro-Bouclier",
		},
		text: {
			en: "If this Pokémon has any Psychic Energy attached to it, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Si de l’Énergie Psychic est attachée à ce Pokémon, il subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Full Moon Ray",
			fr: "Rayon Pleine Lune",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
