import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-22",
	localId: 22,

	// Card informations
	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/22/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/22/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/22/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 322,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Flame Dash",
			fr: "Ruée enflammée",
		},
		text: {
			en: "Once during your turn, when you play Arcanine from your hand to evolve 1 of your Benched Pokémon, you may switch Arcanine with 1 of your Active Pokémon. If you do, you may move any number of Energy cards attached to that Pokémon to Arcanine.",
			fr: "Une seule fois lors de votre tour, lorsque vous jouez Arcanin de votre main pour évoluer 1 des Pokémon de votre Banc, vous pouvez échanger Arcanin avec 1 de vos Pokémon Actifs. Déplacez alors autant de cartes Énergie attachées à ce Pokémon que vous voulez sur Arcanin.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Inferno Onrush",
			fr: "Torrent d'enfer",
		},
		text: {
			en: "Arcanine does 40 damage to itself.",
			fr: "Arcanin s'inflige 40 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
