import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-11",
	localId: 11,

	// Card informations
	name: {
		en: "Torterra",
		fr: "Torterra",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 389,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/11/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/11/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/11/high",
		},
	},

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 1068,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sunshine Song",
			fr: "Chanson solaire",
		},
		text: {
			en: "Once during your turn (before your attack), when you play Torterra from your hand to evolve 1 of your Pokémon, you may choose as many of your Grass Pokémon in play as you like. For each Grass Pokémon you choose, search your deck for an Evolution card that evolves from that Pokémon and evolve it. Shuffle your deck afterward.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Torterra de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir autant de Pokémon Grass que vous avez en jeu que vous le voulez. Pour chaque Pokémon Grass que vous choisissez, cherchez dans votre deck une carte Évolution qui évolue de ce Pokémon et faites-le évoluer. Ensuite, mélangez votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crash Impact",
			fr: "Cratère",
		},
		text: {
			en: "Torterra does 20 damage to itself. Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
			fr: "Torterra s'inflige 20 dégâts. Votre adversaire échange le Pokémon  Défenseur avec 1 de ses Pokémon de Banc, s'il en a.",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Land Shake",
			fr: "Terre tremblante",
		},
		text: {
			en: "During your opponent's next turn, when your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
			fr: "Lors du prochain tour de votre adversaire, lorsque celui-ci place un Pokémon de base de sa main sur son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
