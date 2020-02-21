import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-35",
	localId: 35,

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
			en: "https://assets.tcgdex.net/en/dp/dp3/35/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/35/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/35/high",
		},
	},

	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mirror Move",
			fr: "Mimique",
		},
		text: {
			en: "If Pidgeot was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Pidgeot to the Defending Pokémon.",
			fr: "Si une attaque a infligé des dégâts à Roucarnage lors du dernier tour de votre adversaire, cette attaque inflige le même nombre de dégâts au Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
