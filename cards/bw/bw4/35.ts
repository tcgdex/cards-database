import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-35",
	localId: 35,

	// Card informations
	name: {
		en: "Jellicent",
		fr: "Moyade",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 593,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/35/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/35/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/35/high.png",
		},
	},

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Vengeful Wish",
			fr: "Désir de Vengeance",
		},
		text: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does the same amount of damage to the Defending Pokémon.",
			fr: "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige la même quantité de dégâts au Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Absorb Life",
			fr: "Absorption",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card

