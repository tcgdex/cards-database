import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-82",
	localId: 82,

	// Card informations
	name: {
		en: "Marshadow & Machamp-GX",
		fr: "Marshadow et Mackogneur-GX",
	},

	hp: 270,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/82/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/82/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Revenge",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during their last turn, this attack does 90 more damage.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hundred-Blows Impact",
			fr: "Vendetta",
		},
		text: {
			fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 160
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Acme of Heroism-GX",
			fr: "Les Cent Coups",
		},
		text: {
			en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), and if it would be Knocked Out by damage from an opponent's attack during their next turn, it is not Knocked Out, and its remaining HP becomes 10. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 200
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			fr: "Summum Héroïque-GX",
		},
		text: {
			fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), et s’il doit être mis K.O. par les dégâts d’une attaque de l’adversaire pendant son prochain tour, ce Pokémon n’est pas mis K.O. et il lui reste 10 PV. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
