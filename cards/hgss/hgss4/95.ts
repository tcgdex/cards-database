import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-95",
	localId: 95,

	// Card informations
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/95/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/95/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/95/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 124,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fighting Tag",
			fr: "Relève guerrière",
		},
		text: {
			en: "Once during your turn (before your attack), if Machamp is on your Bench, you may move all Fighting Energy attached to your Active Pokémon to Machamp. If you do, switch Machamp with your Active Pokémon.",
			fr: "Une fois pendant votre tour (avant votre attaque), si Mackogneur est sur votre Banc, vous pouvez lui attribuer toutes les cartes Énergie Fighting attachées à votre Pokémon Actif. Dans ce cas, échangez Mackogneur avec votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crushing Punch",
			fr: "Poing dévastateur",
		},
		text: {
			en: "Discard a Special Energy card attached to the Defending Pokémon.",
			fr: "Défaussez une carte Énergie Spéciale attachée au Pokémon Défenseur.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Champ Buster",
			fr: "Explos'tout",
		},
		text: {
			en: "Does 100 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
			fr: "Inflige 100 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant des marqueurs de dégât.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
