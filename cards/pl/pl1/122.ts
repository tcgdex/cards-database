import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-122",
	localId: 122,

	// Card informations
	name: {
		en: "Dialga G",
		fr: "Dialga ",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/122/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/122/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
		Tag.SP,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 338,
		type: AbilityType.POKEBODY,
		name: {
			en: "Time Crystal",
			fr: "Crystal temporel",
		},
		text: {
			en: "Each Pokémon (both yours and your opponent's) (excluding Pokémon SP) can't use any Poké-Bodies.",
			fr: "Chaque Pokémon (les vôtres et ceux de votre adversaire) (Pokémon SP exclus) ne peut pas utiliser de Poké-Bodies.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Remove Lost",
			fr: "Retire-perte",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, remove an Energy card attached to the Defending Pokémon and put it in the Lost Zone.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, retirez au Pokémon Défenseur une carte Énergie et placez-la dans la Zone Perdue.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
