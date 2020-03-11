import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-32",
	localId: 32,

	// Card informations
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/32/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/32/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/32/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 422,
		type: AbilityType.POKEBODY,
		name: {
			en: "Moonlight Veil",
			fr: "Voile lunaire",
		},
		text: {
			en: "Each of your Pokémon that evolves from Eevee has no Weakness, and that Pokémon's Retreat Cost is 0.",
			fr: "Chacun de vos Pokémon évoluant d'Evoli ne possède pas de Faiblesse et a un Coût de retraite de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde folie",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
