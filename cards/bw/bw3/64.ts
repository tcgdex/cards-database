import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-64",
	localId: 64,

	// Card informations
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 534,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/64/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/64/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/64/high",
		},
	},

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",

	abilities: [{
		id: 798,
		type: AbilityType.TALENT,
		name: {
			en: "Craftsmanship",
			fr: "Maître d'Œuvre",
		},
		text: {
			en: "This Pokémon gets +20 HP for each Fighting Energy attached to it.",
			fr: "Chaque Énergie Fighting attachée à ce Pokémon lui ajoute 20 PV.",
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
			en: "Top Down",
			fr: "Écras'Montagne",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
