import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-58",
	localId: 58,

	// Card informations
	name: {
		en: "Swalot",
		fr: "Avaltout",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 317,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/58/high",
		},
	},

	evolveFrom: {
		en: "Gulpin",
		fr: "Gloupti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
			fr: "Amnésie",
		},
		text: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow Up",
			fr: "Engloutir",
		},
		text: {
			en: "If, before doing damage, your opponent's Active Pokémon has less remaining HP than this Pokémon, this attack does 80 more damage.",
			fr: "Si, avant d’infliger des dégâts, il reste moins de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
