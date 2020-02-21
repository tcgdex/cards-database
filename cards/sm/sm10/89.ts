import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-89",
	localId: 89,

	// Card informations
	name: {
		en: "Golem",
		fr: "Grolem",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/89/high",
		},
	},

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steamroller",
			fr: "Bulldoboule",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 100
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Slam",
			fr: "Tacle Lourd",
		},
		text: {
			en: "This attack does 20 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 20 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
