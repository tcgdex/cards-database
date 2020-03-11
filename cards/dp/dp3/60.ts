import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-60",
	localId: 60,

	// Card informations
	name: {
		en: "Quagsire",
		fr: "Maraiste",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 195,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/60/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/60/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/60/high",
		},
	},

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 345,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Aqua Healing",
			fr: "Aqua guérison",
		},
		text: {
			en: "Once during your turn (before your attack), if Quagsire is your Active Pokémon and the Defending Pokémon has any Water Energy attached to it, you may remove 3 damage counters from Quagsire.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Maraiste est votre Pokémon Actif et que le Pokémon Défenseur possède de l'Énergie Water, vous pouvez retirer à Maraiste 3 marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Muddy Water",
			fr: "Ocroupi",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
