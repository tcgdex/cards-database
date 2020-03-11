import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-39",
	localId: 39,

	// Card informations
	name: {
		en: "Unown S",
		fr: "Zarbi S",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/39/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/39/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kazuyuki Kano",

	abilities: [{
		id: 240,
		type: AbilityType.POKEPOWER,
		name: {
			en: "SET",
			fr: "SÉRIE",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Unown S, Unown E, and Unown T on your Bench, you may flip a coin. If heads, search your discard pile for an Energy card, show it your opponent, and put it on top of your deck.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez Zarbi S, Zarbi E et Zarbi T sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Énergie, montrez-la à votre adversaire et placez-la au dessus de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
