import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Banette",
		fr: "Branette",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 354,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/19/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/19/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/19/high",
		},
	},

	evolveFrom: {
		en: "Shuppet",
		fr: "Polychombr",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",

	abilities: [{
		id: 247,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Temper Tantrum",
			fr: "Piquer une colère",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard as many cards as you like from your hand. If you do, put that many damage counters on Banette. This power can't be used if Banette is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser de votre main autant de cartes que vous voulez. Vous pouvez alors placer autant de marqueurs de dégât sur Branette. Ce pouvoir ne peut pas être utilisé si Branette est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Darkness Switch",
			fr: "Échange obscurité",
		},
		text: {
			en: "Discard an Energy card attached to Banette, and then switch all damage counters on Banette with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)",
			fr: "Défaussez une carte Énergie attachée à Branette puis échangez tous les marqueurs de dégât se trouvant sur Branette avec ceux du Pokémon Défenseur. (Si un effet de cette attaque est contré, cette attaque est sans effet.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Loneliness",
			fr: "Solitude",
		},
		text: {
			en: "You may show your hand to your opponent. If you do and if you don't have any Pokémon in your hand, this attack does 30 damage plus 30 more damage.",
			fr: "Vous pouvez montrer votre main à votre adversaire. Si vous ne possédez pas de Pokémon, cette attaque inflige alors 30 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
