import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-13",
	localId: 13,

	// Card informations
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 609,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/13/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/13/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/13/high.png",
		},
	},

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 74,
		type: AbilityType.TALENT,
		name: {
			en: "Shady Move",
			fr: "Déplacement Louche",
		},
		text: {
			en: "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon vers un autre.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Super Singe",
			fr: "Super Roussi",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

