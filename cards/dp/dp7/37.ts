import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-37",
	localId: 37,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Electrode",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/37/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/37/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/37/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Flash",
			fr: "Flash",
		},
		text: {
			en: "If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electro Diffusion",
			fr: "Électro-diffusion",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Electrode. Flip a coin. If tails, discard all Lightning Energy attached to Electrode.",
			fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Lightning attachée à Electrode. Lancez une pièce. Si c'est pile, défaussez toutes les Énergies Lightning attachées à Electrode.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
