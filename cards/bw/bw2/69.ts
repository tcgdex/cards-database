import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-69",
	localId: 69,

	// Card informations
	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 630,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/69/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/69/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/69/high",
		},
	},

	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bone Rush",
			fr: "Charge-Os",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Pulse",
			fr: "Vibrobscur",
		},
		text: {
			en: "Does 10 more damage for each Darkness Energy attached to all of your Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
