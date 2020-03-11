import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-95",
	localId: 95,

	// Card informations
	name: {
		en: "Metagross",
		fr: "Métalosse",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/95/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/95/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/95/high",
		},
	},

	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "TOKIYA",

	abilities: [{
		id: 1175,
		type: AbilityType.TALENT,
		name: {
			en: "Extend",
			fr: "Prolongement",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your turn does not end when you play Steven's Resolve.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, votre tour ne se termine pas lorsque vous jouez Résolution de Pierre.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Meteor Mash",
			fr: "Poing Météore",
		},
		text: {
			en: "During your next turn, this Pokémon's Meteor Mash attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Poing Météore de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
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

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
