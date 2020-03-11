import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-216",
	localId: 216,

	// Card informations
	name: {
		en: "Heatran-GX",
		fr: "Heatran-GX",
	},

	hp: 190,

	type: [
		Type.FIRE,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/216/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/216/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/216/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/216/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "ConceptLab",

	abilities: [{
		id: 181,
		type: AbilityType.TALENT,
		name: {
			en: "Burning Road",
			fr: "Route Enflammée",
		},
		text: {
			en: "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Fire Energy from your other Pokémon to it.",
			fr: "Une seule fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc pour devenir votre Pokémon Actif, vous pouvez déplacer autant d’Énergies Fire que vous le voulez de vos autres Pokémon vers lui.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Steaming Stomp",
			fr: "Piétinement Fumant",
		},
		damage: 130
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Hot Burn-GX",
			fr: "Brûlure Torride-GX",
		},
		text: {
			en: "This attack does 50 damage times the amount of Fire Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies Fire attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
