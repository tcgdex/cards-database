import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-9",
	localId: 9,

	// Card informations
	name: {
		en: "Leavanny",
		fr: "Manternel",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 542,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/9/high",
		},
	},

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 850,
		type: AbilityType.TALENT,
		name: {
			en: "Blanket Weaver",
			fr: "Tisserand de Couvertures",
		},
		text: {
			en: "Your Grass Pokémon take 40 less damage from your opponent's attacks (after applying Weakness and Resistance). You can't apply more than 1 Blanket Weaver Ability at a time.",
			fr: "Vos Pokémon Grass subissent 40 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Tisserand de Couvertures à la fois.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
