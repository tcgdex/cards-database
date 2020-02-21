import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-72",
	localId: 72,

	// Card informations
	name: {
		en: "Unown Z",
		fr: "Zarbi Z",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/72/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/72/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},

	abilities: [{
		id: 891,
		type: AbilityType.POKEPOWER,
		name: {
			en: "ZERO",
			fr: "ZÉRO",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown Z is on your Bench and you have no cards in your deck, you may discard all cards attached to Unown Z and put Unown Z on top of your deck.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi Z est sur votre Banc et qu'il ne vous reste plus de cartes dans votre deck, vous pouvez défausser toutes les cartes attachées à Zarbi Z et placer Zarbi Z au dessus de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Remove as many damage counters as you like from each Unown you have in play. Put that many damage counters on the Defending Pokémon.",
			fr: "Retirez à chacun des Zarbis que vous avez en jeu autant de marqueurs de dégât que vous voulez. Placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
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
