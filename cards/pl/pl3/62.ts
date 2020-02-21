import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-62",
	localId: 62,

	// Card informations
	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 2,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/62/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/62/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/62/high",
		},
	},

	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},

	abilities: [{
		id: 670,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolutionary Pollen",
			fr: "Pollen évolutif",
		},
		text: {
			en: "Once during your turn, when you play Ivysaur from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent's Active Pokémon is now Asleep.",
			fr: "Une seule fois lors de votre tour, lorsque vous jouez Herbizarre de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser ce pouvoir. Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
