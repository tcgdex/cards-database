import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-78",
	localId: 78,

	// Card informations
	name: {
		en: "Mewtwo-GX",
		fr: "Mewtwo-GX",
	},

	hp: 190,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/78/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/78/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Full Burst",
			fr: "Pleine Puissance",
		},
		text: {
			en: "This attack does 30 damage times the amount of Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Super Absorption",
			fr: "Super Absorption",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psystrike-GX",
			fr: "Frappe Psy-GX",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
