import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-12",
	localId: 12,

	// Card informations
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 71,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/12/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/12/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/12/high",
		},
	},

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 918,
		type: AbilityType.POKEBODY,
		name: {
			en: "Tangling Tendrils",
			fr: "Enchevêtrement végétal",
		},
		text: {
			en: "As long as Victreebel is your Active Pokémon, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.",
			fr: "Tant qu'Empiflor est votre Pokémon Actif, le Coût de retraite du Pokémon Actif de votre adversaire est augmenté de ColorlessColorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Acidic Drain",
			fr: "Ponction acide",
		},
		text: {
			en: "The Defending Pokémon is now Burned and Poisoned. Remove 3 damage counters from Victreebel.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Retirez 3 marqueurs de dégât à Empiflor.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
