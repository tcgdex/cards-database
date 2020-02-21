import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-104",
	localId: 104,

	// Card informations
	name: {
		en: "Floatzel GL",
		fr: "Mustéflott  Niv. X",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 419,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/104/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/104/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 475,
		type: AbilityType.POKEBODY,
		name: {
			en: "Water Rescue",
			fr: "Sauvetage nautique",
		},
		text: {
			en: "Whenever any of your Water Pokémon (excluding any Floatzel ) is Knocked Out by damage from your opponent's attack, you may put that Pokémon and all cards that were attached to it from your discard pile into your hand.",
			fr: "Lorsque que n'importe lequel de vos Pokémon Water (tous les Mustéflott  mis K.O par les dégâts d'une attaque de votre adversaire exclus), vous pouvez placer ce Pokémon ainsi que toutes les cartes qui lui sont attachées de votre pile de défausse à votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Energy Cyclone",
			fr: "Énergie Tourbillon",
		},
		text: {
			en: "Choose as many Energy cards from your hand as you like and show them to your opponent. This attack does 20 damage times the number of Energy cards you chose. Put those Energy cards on top of your deck. Shuffle your deck afterward.",
			fr: "Choisissez autant de cartes Énergie de votre main que vous le voulez et montrez-les à votre adversaire. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Énergie que vous avez choisit. Placez ces cartes Énergie au dessus de votre deck. Ensuite, mélangez votre deck.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
