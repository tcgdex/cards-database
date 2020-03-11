import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-50",
	localId: 50,

	// Card informations
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 180,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/50/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/50/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/50/high",
		},
	},

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Attract Current",
			fr: "Courant électrique",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck une carte Énergie Lightning et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electromagnetic Kick",
			fr: "Coup électromagnétique",
		},
		text: {
			en: "Flip a coin. If tails, Flaaffy does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Lainergie s'inflige 10 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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
