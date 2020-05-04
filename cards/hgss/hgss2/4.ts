import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-4",
	localId: 4,

	// Card informations
	name: {
		en: "Metagross",
		fr: "Metalosse",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/4/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/4/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/4/high",
		},
	},

	evolveFrom: {
		en: "Metang",
		fr: "Metang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Wataru Kawahara",

	abilities: [{
		id: 83,
		type: AbilityType.POKEBODY,
		name: {
			en: "Psychic Float",
			fr: "Psy-flotteur",
		},
		text: {
			en: "If you have any Psychic Energy attached to your Active Pokémon, the Retreat Cost for that Pokémon is 0.",
			fr: "Si une ou plusieurs cartes Énergie Psychic sont attachées à votre Pokémon Actif, le Coût de retraite de ce dernier est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pulse Blast",
			fr: "Explosion vibrante",
		},
		damage: 60
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Double Leg Hammer",
			fr: "Marteau têtu",
		},
		text: {
			en: "Choose 2 of your opponent's Benched Pokémon. This attack does 40 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 2 des Pokémon se trouvant sur le Banc de votre adversaire. Cette attaque inflige 40 dégâts à chacun d'entre eux. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
