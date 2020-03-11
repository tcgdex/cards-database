import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-48",
	localId: 48,

	// Card informations
	name: {
		en: "Shedinja",
		fr: "Munja",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 292,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/48/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/48/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/48/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 17,
		type: AbilityType.TALENT,
		name: {
			en: "Empty Shell",
			fr: "Coquille Vide",
		},
		text: {
			en: "If this Pokémon is Knocked Out, your opponent can't take any Prize cards for it.",
			fr: "Si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Cursed Drop",
			fr: "Chute Maudite",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
