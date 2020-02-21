import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-4",
	localId: 4,

	// Card informations
	name: {
		en: "Entei",
		fr: "Entei",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 244,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/4/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/4/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 311,
		type: AbilityType.POKEBODY,
		name: {
			en: "Burning Coat",
			fr: "Manteau brûlant",
		},
		text: {
			en: "Whenever 1 of your opponent's Pokémon is Knocked Out by damage from Entei's attacks, discard the top 3 cards from your opponent's deck.",
			fr: "Lorsqu'1 des Pokémon de votre adversaire est mis K.O par des dégâts infligés par des attaques d'Entei, défaussez les 3 cartes du dessus du deck de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Blaze Roar",
			fr: "Flammes rugissantes",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, discard 2 Fire Energy attached to Entei.",
			fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.) Lancez une pièce. Si c'est pile, défaussez 2 cartes Énergie Fire attachées à Entei.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
