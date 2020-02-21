import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM178",
	localId: "SM178",

	// Card informations
	name: {
		en: "Melmetal-GX",
		fr: "Melmetal-GX",
	},

	hp: 220,

	type: [
		Type.METAL,
	],

	dexId: 809,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM178/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM178/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM178/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM178/high",
		},
	},

	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 194,
		name: "PLANETA Otani"
	},

	abilities: [{
		id: 1328,
		type: AbilityType.TALENT,
		name: {
			en: "Hard Coat",
			fr: "Strate Dure",
		},
		text: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Blast",
			fr: "Explosion Métallique",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Metal Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Metal attachées à ce Pokémon.",
		},
		damage: 110
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Iron Force GX",
			fr: "Force de Fer-GX",
		},
		text: {
			en: "Attach any number of Metal Energy cards from your discard pile to this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Attachez autant de cartes Énergie Metal que vous le voulez de votre pile de défausse à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
