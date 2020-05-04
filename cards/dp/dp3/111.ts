import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-111",
	localId: 111,

	// Card informations
	name: {
		en: "Spinda",
		fr: "Spinda",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 327,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/111/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/111/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dish Out",
			fr: "Distribution",
		},
		text: {
			en: "Draw a card from the top and the bottom of your deck.",
			fr: "Piochez une carte du dessus et du dessous de votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Synchro Punch",
			fr: "Synchro-poing",
		},
		text: {
			en: "If any basic Energy card attached to Spinda is the same type as any Energy attached to the Defending Pokémon, this attack does 10 damage plus 30 more damage.",
			fr: "Si une carte Énergie attachée à Spinda est du même type qu'une carte Énergie attachée au Pokémon Défenseur, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
