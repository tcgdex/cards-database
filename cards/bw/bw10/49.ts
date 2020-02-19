import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw10/49/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/49/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/49/high.png",
		},
	},

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

