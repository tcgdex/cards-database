import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM25",
	localId: "SM25",

	// Card informations
	name: {
		en: "Lurantis",
		fr: "Floramantis",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 754,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM25/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM25/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM25/high",
		},
	},

	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 695,
		type: AbilityType.TALENT,
		name: {
			en: "Sunny Day",
			fr: "Zénith",
		},
		text: {
			en: "The attacks of your Grass Pokémon and Fire Pokémon do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Grass et de vos Pokémon Fire infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
