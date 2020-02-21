import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-125",
	localId: 125,

	// Card informations
	name: {
		en: "Palkia G",
		fr: "Palkia ",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/125/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/125/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/125/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
		Tag.SP,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 341,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Lost Cyclone",
			fr: "Cyclone perdu",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Any player who has 4 or more Benched Pokémon chooses 3 of his or her Benched Pokémon. Put the other Benched Pokémon and all cards attached to them in the Lost Zone. (You choose your Pokémon first.) This power can't be used if Palkia is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Les joueurs possédant au moins 4 Pokémon de Banc choisissent 3 de leur Pokémon de Banc. Placez les autres Pokémon de Banc ainsi que toutes les cartes qui leur sont attachées dans la Zone Perdue. (Vous choisissez vos Pokémon en premier.) Ce pouvoir ne peut pas être utilisé si Palkia  est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Shot",
			fr: "Hydro-coup",
		},
		text: {
			en: "Discard 2 Energy attached to Palkia . Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies attachées à Palkia . Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
