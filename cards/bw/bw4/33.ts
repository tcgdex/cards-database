import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-33",
	localId: 33,

	// Card informations
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 584,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/33/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/33/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/33/high.png",
		},
	},

	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 1435,
		type: AbilityType.TALENT,
		name: {
			en: "Slippery Soles",
			fr: "Sol Verglacé",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec 1 de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec 1 de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crushing Ice",
			fr: "Brise-Glace",
		},
		text: {
			en: "Does 10 more damage for each Colorless in the Defending Pokémon's Retreat Cost.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque Colorless dans le coût de Retraite du Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card

