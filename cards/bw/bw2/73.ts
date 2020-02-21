import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-73",
	localId: 73,

	// Card informations
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 598,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/73/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/73/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/73/high",
		},
	},

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Iron Defense",
			fr: "Mur de Fer",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Whip",
			fr: "Mégafouet",
		},
		text: {
			en: "Does 10 damage for each Energy attached to this Pokémon to one of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts pour chaque Énergie attachée à ce Pokémon à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
