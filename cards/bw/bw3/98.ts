import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-98",
	localId: 98,

	// Card informations
	name: {
		en: "Victini",
		fr: "Victini",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/98/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/98/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 308,
		type: AbilityType.TALENT,
		name: {
			en: "Victory Star",
			fr: "Victorieux",
		},
		text: {
			en: "Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.",
			fr: "Une seule fois pendant votre tour, après avoir lancé des pièces pour une attaque, vous pouvez ignorer les effets de ces lancers de pièce et lancer ces pièces à nouveau. Vous ne pouvez pas utiliser la capacité spéciale Victorieux plus d'une fois par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Stored Power",
			fr: "Force Ajoutée",
		},
		text: {
			en: "Move all Energy attached to this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez toutes les Énergies attachées à ce Pokémon vers 1 de vos Pokémon de Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
