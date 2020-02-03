import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-110",
	localId: 110,

	// Card informations
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 185,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/110/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/110/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/110/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Reply Strongly",
			fr: "Puissante Réplique",
		},
		text: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn while it was your Active Pokémon, this attack does 80 more damage.",
			fr: "Si ce Pokémon a subi les dégâts d’une attaque pendant le dernier tour de votre adversaire en tant que Pokémon Actif, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

