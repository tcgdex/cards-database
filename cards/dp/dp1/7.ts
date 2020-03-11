import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-7",
	localId: 7,

	// Card informations
	name: {
		en: "Luxray",
		fr: "Luxray",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/7/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/7/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/7/high",
		},
	},

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mikiko Takeda",

	abilities: [{
		id: 10,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sharp Eye",
			fr: "Brilloeil",
		},
		text: {
			en: "Once during your turn, when you play Luxray from your hand to evolve 1 of your Pokémon, you may look at your opponent's hand. If your opponent's Bench isn't full, choose 1 Basic Pokémon from your opponent's hand, and put it onto his or her Bench. Then, switch it with the Defending Pokémon.",
			fr: "Une seule fois lors de votre tour, lorsque vous jouez Luxray de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez regarder la main de votre adversaire. Si le Banc de votre adversaire n'est pas plein, choisissez-y 1 Pokémon de Base et placez-le sur son Banc. Ensuite, échangez-le avec le Pokémon Défenseur.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Lightning Star",
			fr: "Étoile éclatante",
		},
		text: {
			en: "Move all Lightning Energy attached to Luxray to 1 of your Benched Pokémon. (Ignore this effect if you don't have any Benched Pokémon.)",
			fr: "Déplacez toutes les Énergies Lightning attachées à Luxray sur 1 de vos Pokémon de Banc. (Ignorez cet effet si vous n'avez pas de Pokémon de Banc).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
