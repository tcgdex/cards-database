import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Dodrio",
		fr: "Dodrio",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 85,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/11/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/11/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/11/high",
		},
	},

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},

	abilities: [{
		id: 18,
		type: AbilityType.POKEBODY,
		name: {
			en: "Retreat Aid",
			fr: "Soutien de retraite",
		},
		text: {
			en: "As long as Dodrio is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
			fr: "Tant que Dodrio est sur votre Banc, le Coût de retraite de votre Pokémon Actif est réduit de ColorlessColorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Incessant Peck",
			fr: "Rafal'Bec",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 damage plus 20 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce qu'elle tombe sur pile.  Cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
