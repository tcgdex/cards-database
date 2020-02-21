import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-79",
	localId: 79,

	// Card informations
	name: {
		en: "Unown V",
		fr: "Zarbi V",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/79/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/79/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 605,
		type: AbilityType.POKEPOWER,
		name: {
			en: "VACATION",
			fr: "VACANCES",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove 2 damage counters from each of your Pokémon. If you do, your turn ends. This power can't be used if Unown V is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer à chacun de vos Pokémon 2 marqueurs de dégât. Votre tour est alors terminé. Ce pouvoir ne peut pas être utilisé si Zarbi V est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
