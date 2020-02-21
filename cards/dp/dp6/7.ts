import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-7",
	localId: 7,

	// Card informations
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/7/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/7/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/7/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
		fr: "Seemon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		name: {
			en: "Aqua Stream",
			fr: "Aqua-courant",
		},
		text: {
			en: "Search your discard pile for as many Water Energy cards as you like, show them to your opponent, and this attack does 10 damage for each Water Energy card you chose. Put those cards on top of your deck. Shuffle your deck afterward.",
			fr: "Cherchez dans votre pile de défausse autant de cartes Énergie Water que vous le voulez et montrez-les à votre adversaire. Cette attaque inflige 10 dégâts pour chaque Énergie Water choisie. Placez ces cartes au-dessus de votre deck. Ensuite, mélangez votre deck.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Dragon Pump",
			fr: "Draco-pompe",
		},
		text: {
			en: "You may discard 2 cards from your hand. If you do, this attack does 40 damage plus 20 more damage and does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous pouvez défausser 2 cartes de votre main. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires et inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
