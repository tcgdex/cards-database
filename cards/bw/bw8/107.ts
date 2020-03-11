import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-107",
	localId: 107,

	// Card informations
	name: {
		en: "Exploud",
		fr: "Brouhabam",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 295,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/107/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/107/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/107/high",
		},
	},

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Destructive Sound",
			fr: "Son Destructeur",
		},
		text: {
			en: "Your opponent reveals his or her hand. Discard all Item cards you find there.",
			fr: "Votre adversaire montre sa main. Défaussez toutes les cartes Objet que vous y trouvez.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Round",
			fr: "Chant Canon",
		},
		text: {
			en: "Does 50 damage times the number of your Pokémon that have the Round attack.",
			fr: "Inflige 50 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
