import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-54",
	localId: 54,

	// Card informations
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 576,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/54/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/54/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/54/high",
		},
	},

	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Tractorbeam",
			fr: "Rayon Inversion",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Link Blast",
			fr: "Explosion en Série",
		},
		text: {
			en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 80 more damage.",
			fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d’Énergies attachées, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
