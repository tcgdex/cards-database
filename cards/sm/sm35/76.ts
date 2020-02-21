import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-76",
	localId: 76,

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
			en: "https://assets.tcgdex.net/en/sm/sm35/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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
