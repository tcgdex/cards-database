import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-52",
	localId: 52,

	// Card informations
	name: {
		en: "Kecleon",
		fr: "Kecleon",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 352,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/52/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/52/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 340,
		type: AbilityType.POKEBODY,
		name: {
			en: "Camouflage",
			fr: "Camouflage",
		},
		text: {
			en: "If any basic Energy card attached to Kecleon is the same type as the Attacking Pokémon's type, any damage done by attacks from that Pokémon to Kecleon is reduced by 40 (after applying Weakness and Resistance).",
			fr: "Si n'importe quelle carte Énergie de base attachée à Kecleon est du même type que le Pokémon Attaquant, tous dégâts infligés à Kecleon par des attaques de ce Pokémon sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blind Scratch",
			fr: "Griffe aveuglante",
		},
		text: {
			en: "Flip a coin. If tails, this attack does no damage to the Defending Pokémon. Instead, this attack does 20 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est pile, cette attaque n'inflige pas de dégâts au Pokémon Défenseur. Cette attaque inflige 20 dégâts à 1 de vos Pokémon.  (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
