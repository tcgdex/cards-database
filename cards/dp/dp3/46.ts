import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-46",
	localId: 46,

	// Card informations
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/46/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/46/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/46/high",
		},
	},

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare Tail",
			fr: "Queue flamboyante",
		},
		text: {
			en: "Flip a coin. If heads, discard a Fire Energy attached to Charmeleon and this attack does 50 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie Fire attachée à Reptincel et cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
