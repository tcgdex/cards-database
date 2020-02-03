import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-25",
	localId: 25,

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
			en: "https://assets.tcgdex.net/en/sm/sm11/25/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/25/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/25/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 172,
		name: "PLANETA Tsuji"
	},

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

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

