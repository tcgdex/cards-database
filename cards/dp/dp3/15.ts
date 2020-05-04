import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-15",
	localId: 15,

	// Card informations
	name: {
		en: "Mew",
		fr: "Mew",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/15/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/15/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {
			en: "Psychic Balance",
			fr: "Équilibre psy",
		},
		text: {
			en: "If you have less cards in your hand than your opponent, draw cards until you have the same number of cards as your opponent. (If you have more or the same number of cards in your hand as your opponent, this attack does nothing.)",
			fr: "Si vous avez moins de cartes en main que votre adversaire, piochez des cartes jusqu'à ce que vous en ayez autant que lui. (Si vous avez plus ou autant de cartes en main que votre adversaire, cette attaque est sans effet.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Re-creation",
			fr: "Re-création",
		},
		text: {
			en: "Choose an attack on 1 of your opponent's Pokémon in his or her discard pile. Re-creation copies that attack except for its Energy cost. (You must still do anything else required for that attack.) Mew performs that attack.",
			fr: "Choisissez une attaque d'1 des Pokémon de votre adversaire se trouvant dans sa pile de défausse. Re-création copie cette attaque (sauf son Coût en Énergie). (Vous devez toujours faire ce qu'indique l'attaque.) Mew utilise cette attaque.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
