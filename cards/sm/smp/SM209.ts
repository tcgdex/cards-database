import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM209",
	localId: "SM209",

	// Card informations
	name: {
		en: "Stakataka",
		fr: "Ama-Ama",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 805,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM209/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM209/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM209/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM209/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 139,
		type: AbilityType.TALENT,
		name: {
			en: "Wall of Stone",
			fr: "Mur de Pierres",
		},
		text: {
			en: "If your opponent has 3 or fewer Prize cards remaining, this Pokémon's maximum HP is 200.",
			fr: "S’il reste 3 cartes Récompense ou moins à votre adversaire, les PV maximum de ce Pokémon sont de 200.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Top Down",
			fr: "Écras’Montagne",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
