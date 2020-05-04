import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-49",
	localId: 49,

	// Card informations
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/49/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/49/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/49/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoki Saito",

	abilities: [{
		id: 406,
		type: AbilityType.TALENT,
		name: {
			en: "Badge of Discipline",
			fr: "Badge de la Discipline",
		},
		text: {
			en: "The damage of each of your Fighting Pokémon's attacks isn't affected by Resistance.",
			fr: "Les dégâts des attaques de chacun de vos Pokémon Fighting ne sont pas affectés par la Résistance.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Close Combat",
			fr: "Close Combat",
		},
		text: {
			en: "Flip a coin. If tails, during your opponent's next turn, any damage done to this Pokémon by attacks is increased by 30 (after applying Weakness and Resistance).",
			fr: "Lancez une pièce. Si c'est pile, pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont augmentés de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
