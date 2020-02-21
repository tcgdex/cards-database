import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-41",
	localId: 41,

	// Card informations
	name: {
		en: "Bronzong G",
		fr: "Archéodong ",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/41/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/41/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 90,
		name: "Makoto Imai"
	},

	abilities: [{
		id: 279,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Galactic Switch",
			fr: "Échange galactique",
		},
		text: {
			en: "Once during your turn (before your attack), you may move an Energy card attached to 1 of your Pokémon SP to another of your Pokémon. Then, put 2 damage counters on Bronzong . This power can't be used if Bronzong is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie attachée à 1 de vos Pokémon SP sur un autre de vos Pokémon. Ensuite, placez 2 marqueurs de dégât sur Archéodong . Ce pouvoir ne peut pas être utilisé si Archéodong  est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Pulse",
			fr: "Vibration psy",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
