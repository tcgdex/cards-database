import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-85",
	localId: 85,

	// Card informations
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 573,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/85/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/85/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/85/high",
		},
	},

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},

	abilities: [{
		id: 361,
		type: AbilityType.TALENT,
		name: {
			en: "Smooth Coat",
			fr: "Pelage Lustré",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez les dégâts.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Echoed Voice",
			fr: "Écho",
		},
		text: {
			en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
