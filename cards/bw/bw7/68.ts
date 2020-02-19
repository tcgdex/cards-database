import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-68",
	localId: 68,

	// Card informations
	name: {
		en: "Munna",
		fr: "Munna",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 517,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/68/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/68/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/68/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

	abilities: [{
		id: 165,
		type: AbilityType.TALENT,
		name: {
			en: "Long-Distance Hypnosis",
			fr: "Téléhypnose",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your Active Pokémon is now Asleep.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c'est pile, votre Pokémon Actif est maintenant Endormi.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

