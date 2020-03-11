import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-31",
	localId: 31,

	// Card informations
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/31/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/31/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/31/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Revenge",
			fr: "Vendetta",
		},
		text: {
			en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 20 damage plus 50 more damage.",
			fr: "Si un de vos Pokémon est mis K.O par des dégâts infligés par une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 20 dégâts plus 50 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Dynamic Punch",
			fr: "Dynamo-poing",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 60 damage plus 30 more damage and the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
