import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-55",
	localId: 55,

	// Card informations
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 741,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 89,
		name: "Sekio"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Zappy Pom-Poms",
			fr: "Pom-Poms Électrisants",
		},
		text: {
			en: "This attack does 30 damage to each Pokémon-GX and Pokémon-EX (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chaque Pokémon-GX et Pokémon-EX (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
