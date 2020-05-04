import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-5",
	localId: 5,

	// Card informations
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 473,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/5/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/5/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/5/high",
		},
	},

	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Icy Wind",
			fr: "Vent glacé",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Snowstorm",
			fr: "Tempête de neige",
		},
		text: {
			en: "Does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à chacun des Pokémon se trouvant sur le Banc de votre adversaire et ayant des marqueurs de dégât. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
