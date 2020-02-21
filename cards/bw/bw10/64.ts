import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-64",
	localId: 64,

	// Card informations
	name: {
		en: "Salamence",
		fr: "Drattak",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/64/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/64/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/64/high",
		},
	},

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 938,
		type: AbilityType.TALENT,
		name: {
			en: "Breakwing",
			fr: "Aile Impitoyable",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gaia Crush",
			fr: "Anéantissement de Gaïa",
		},
		text: {
			en: "Discard any Stadium card in play.",
			fr: "Défaussez toute carte Stade en jeu.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
