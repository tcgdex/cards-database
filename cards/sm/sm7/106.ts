import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-106",
	localId: 106,

	// Card informations
	name: {
		en: "Salamence",
		fr: "Drattak",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/106/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/106/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/106/high.png",
		},
	},

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 134,
		type: AbilityType.TALENT,
		name: {
			en: "Dragon Wind",
			fr: "Vent de Dragon",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon, once during your turn (before your attack), you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

