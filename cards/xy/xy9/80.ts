import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-80",
	localId: 80,

	// Card informations
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 598,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/80/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/80/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/80/high",
		},
	},

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spike Lash",
			fr: "Coup d'Fouet à Clous",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon for each Colorless in that Pokémon's Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire pour chaque Colorless dans son Coût de Retraite. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
