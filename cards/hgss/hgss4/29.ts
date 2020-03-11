import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-29",
	localId: 29,

	// Card informations
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 18,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/29/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/29/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/29/high",
		},
	},

	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Headwind",
			fr: "Vent contraire",
		},
		text: {
			en: "During your opponent's next turn, the attack cost of each of the Defending Pokémon's attacks is ColorlessColorless more.",
			fr: "Pendant le prochain tour de votre adversaire, le coût de chaque attaque du Pokémon Défenseur est augmenté de ColorlessColorless.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
