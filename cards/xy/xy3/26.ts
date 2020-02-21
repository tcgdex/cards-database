import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-26",
	localId: 26,

	// Card informations
	name: {
		en: "Aurorus",
		fr: "Dragmara",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 699,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/26/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/26/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/26/high",
		},
	},

	evolveFrom: {
		en: "Amaura",
		fr: "Amagara",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 761,
		type: AbilityType.TALENT,
		name: {
			en: "Ice Shield",
			fr: "Bouclier de Glace",
		},
		text: {
			en: "Any damage done by an opponent's attack to each of your Water Pokémon that has any Water Energy attached to it is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés par une attaque de votre adversaire à chacun de vos Pokémon Water auquel de l'Énergie Water est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Icy Wind",
			fr: "Vent Glace",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
