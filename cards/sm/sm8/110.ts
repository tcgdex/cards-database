import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm8/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



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
