import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-7",
	localId: 7,

	// Card informations
	name: {
		en: "Metagross",
		fr: "Metalosse",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/7/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/7/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/7/high",
		},
	},

	evolveFrom: {
		en: "Metang",
		fr: "Metang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 634,
		type: AbilityType.POKEBODY,
		name: {
			en: "Gravitation",
			fr: "Gravitation",
		},
		text: {
			en: "Each Pokémon in play (both yours and your opponent's) gets -20 HP. No more than 20 HP can be reduced by all Gravitation Poké-Bodies.",
			fr: "Retirez 20 PV à chaque Pokémon en jeu (les vôtres et ceux de votre adversaire). Les Poké-Bodies Gravitation ne peuvent pas retirer plus de 20 PV.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Geo Impact",
			fr: "Géo-impact",
		},
		text: {
			en: "If you have a Stadium card in play, this attack does 20 damage to each of your opponent's Benched Pokémon that is the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire étant du même type que le Pokémon Défenseur. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
