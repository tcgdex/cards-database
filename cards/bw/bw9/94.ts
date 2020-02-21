import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-94",
	localId: 94,

	// Card informations
	name: {
		en: "Kecleon",
		fr: "Kecleon",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 352,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/94/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/94/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},

	abilities: [{
		id: 1425,
		type: AbilityType.TALENT,
		name: {
			en: "Color Change",
			fr: "Déguisement",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, this Pokémon is the same type as your opponent's Active Pokémon.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, ce Pokémon est du même type que le Pokémon Actif de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Imittack",
			fr: "Imit’Attaque",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. If this Pokémon has the necessary Energy to use that attack, use it as this attack.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Si ce Pokémon a l'Énergie nécessaire pour utiliser l'attaque choisie, utilisez-la  à la place de cette attaque.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
