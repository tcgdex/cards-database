import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-44",
	localId: 44,

	// Card informations
	name: {
		en: "Xatu",
		fr: "Xatu",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 178,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/44/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/44/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/44/high",
		},
	},

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 889,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Psychic Shift",
			fr: "Échange Psy",
		},
		text: {
			en: "Once during your turn, if Xatu is on your Bench, you may choose 1 Special Condition from 1 of your Active Pokémon and remove that Special Condition. Then, 1 of the Defending Pokémon is now affected by that Special Condition.",
			fr: "Une seule fois lors de votre tour, si Xatu est sur votre Banc, vous pouvez choisir 1 État Spécial d'1 de vos Pokémon Actifs et le lui retirer. Ensuite, 1 des Pokémon Défenseurs est affecté par cet État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Energy Singe",
			fr: "Brûlure d'Énergie",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon plus 10 more damage for each Energy attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie qui lui est attachée.  (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
